"use client";

import { useMemo, useState } from "react";
import { Package, Plus } from "lucide-react";
import { useAppData } from "@/context/AppDataContext";
import type { ProductInput } from "@/context/AppDataContext";
import { useToast } from "@/components/ui/ToastProvider";
import { usePagination } from "@/hooks/usePagination";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Pagination } from "@/components/ui/Pagination";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductsTable } from "@/components/products/ProductsTable";
import { ProductFormModal } from "@/components/products/ProductFormModal";
import type { Product } from "@/types";

const PAGE_SIZE = 8;

export function ProductsView() {
  const { products, isHydrated, addProduct, updateProduct, deleteProduct } = useAppData();
  const { showToast } = useToast();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesSearch =
        query.length === 0 ||
        product.name.toLowerCase().includes(query) ||
        product.sku.toLowerCase().includes(query);
      const matchesCategory = category === "" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  const { page, pageCount, pageItems, setPage, totalItems } = usePagination(filteredProducts, PAGE_SIZE);

  function openAddForm() {
    setEditingProduct(null);
    setIsFormOpen(true);
  }

  function openEditForm(product: Product) {
    setEditingProduct(product);
    setIsFormOpen(true);
  }

  function handleSubmit(input: ProductInput) {
    if (editingProduct) {
      updateProduct(editingProduct.id, input);
      showToast("success", `${input.name} has been updated.`);
    } else {
      addProduct(input);
      showToast("success", `${input.name} has been added to your catalog.`);
    }
    setIsFormOpen(false);
  }

  function handleDeleteConfirm() {
    if (!deletingProduct) return;
    deleteProduct(deletingProduct.id);
    showToast("success", `${deletingProduct.name} has been deleted.`);
    setDeletingProduct(null);
  }

  if (!isHydrated) {
    return <div className="h-96 animate-pulse rounded-xl border border-gray-200 bg-white" />;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ProductFilters search={search} onSearchChange={setSearch} category={category} onCategoryChange={setCategory} />
        <Button onClick={openAddForm} className="shrink-0">
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white">
        {filteredProducts.length === 0 ? (
          <EmptyState
            icon={Package}
            title="No products found"
            description="Try adjusting your search or filter criteria."
          />
        ) : (
          <>
            <ProductsTable products={pageItems} onEdit={openEditForm} onDelete={setDeletingProduct} />
            <Pagination page={page} pageCount={pageCount} onPageChange={setPage} totalItems={totalItems} pageSize={PAGE_SIZE} />
          </>
        )}
      </div>

      <ProductFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmit}
        product={editingProduct}
      />

      <ConfirmDialog
        isOpen={deletingProduct !== null}
        title="Delete product"
        description={deletingProduct ? `This will permanently remove "${deletingProduct.name}" from your catalog.` : ""}
        confirmLabel="Delete"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeletingProduct(null)}
      />
    </div>
  );
}
