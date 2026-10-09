"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { FormField, Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { PRODUCT_CATEGORIES, PRODUCT_STATUSES } from "@/lib/constants";
import type { Product } from "@/types";
import type { ProductInput } from "@/context/AppDataContext";

interface ProductFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (input: ProductInput) => void;
  product: Product | null;
}

interface FormState {
  name: string;
  category: string;
  price: string;
  stock: string;
  status: string;
  sku: string;
}

interface FormErrors {
  name?: string;
  category?: string;
  price?: string;
  stock?: string;
  sku?: string;
}

function initialFormState(product: Product | null): FormState {
  if (!product) {
    return { name: "", category: "", price: "", stock: "", status: "active", sku: "" };
  }
  return {
    name: product.name,
    category: product.category,
    price: String(product.price),
    stock: String(product.stock),
    status: product.status,
    sku: product.sku,
  };
}

function ProductFormFields({
  product,
  onClose,
  onSubmit,
}: {
  product: Product | null;
  onClose: () => void;
  onSubmit: (input: ProductInput) => void;
}) {
  const [form, setForm] = useState<FormState>(() => initialFormState(product));
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = "Product name must be at least 2 characters.";
    }
    if (!form.category) {
      nextErrors.category = "Select a category.";
    }
    const price = Number(form.price);
    if (!form.price || Number.isNaN(price) || price <= 0) {
      nextErrors.price = "Enter a price greater than 0.";
    }
    const stock = Number(form.stock);
    if (form.stock === "" || Number.isNaN(stock) || stock < 0 || !Number.isInteger(stock)) {
      nextErrors.stock = "Enter a stock quantity of 0 or more.";
    }
    if (form.sku.trim().length < 2) {
      nextErrors.sku = "SKU must be at least 2 characters.";
    }
    return nextErrors;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    onSubmit({
      name: form.name.trim(),
      category: form.category as Product["category"],
      price: Number(form.price),
      stock: Number(form.stock),
      status: form.status as Product["status"],
      sku: form.sku.trim(),
    });
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <FormField label="Product name" error={errors.name}>
        <Input
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          placeholder="e.g. Wireless Headphones"
        />
      </FormField>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Category" error={errors.category}>
          <Select value={form.category} onChange={(event) => setForm((prev) => ({ ...prev, category: event.target.value }))}>
            <option value="">Select category</option>
            {PRODUCT_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </FormField>

        <FormField label="Status">
          <Select value={form.status} onChange={(event) => setForm((prev) => ({ ...prev, status: event.target.value }))}>
            {PRODUCT_STATUSES.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Price (USD)" error={errors.price}>
          <Input
            type="number"
            min="0"
            step="0.01"
            value={form.price}
            onChange={(event) => setForm((prev) => ({ ...prev, price: event.target.value }))}
            placeholder="0.00"
          />
        </FormField>

        <FormField label="Stock quantity" error={errors.stock}>
          <Input
            type="number"
            min="0"
            step="1"
            value={form.stock}
            onChange={(event) => setForm((prev) => ({ ...prev, stock: event.target.value }))}
            placeholder="0"
          />
        </FormField>
      </div>

      <FormField label="SKU" error={errors.sku}>
        <Input
          value={form.sku}
          onChange={(event) => setForm((prev) => ({ ...prev, sku: event.target.value }))}
          placeholder="e.g. ELC-1007"
        />
      </FormField>

      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">{product ? "Save Changes" : "Add Product"}</Button>
      </div>
    </form>
  );
}

export function ProductFormModal({ isOpen, onClose, onSubmit, product }: ProductFormModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={product ? "Edit Product" : "Add Product"}
      description={product ? "Update the details for this product." : "Create a new product in your catalog."}
    >
      {isOpen ? (
        <ProductFormFields key={product?.id ?? "new"} product={product} onClose={onClose} onSubmit={onSubmit} />
      ) : null}
    </Modal>
  );
}
