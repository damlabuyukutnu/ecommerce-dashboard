"use client";

import { useState } from "react";
import { SettingsCard } from "@/components/settings/SettingsCard";
import { FormField, Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { useAppData } from "@/context/AppDataContext";
import { useToast } from "@/components/ui/ToastProvider";
import type { StoreSettings } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CURRENCIES = ["USD", "EUR", "GBP", "TRY"];

export function StoreForm() {
  const { settings, updateStoreSettings } = useAppData();
  const { showToast } = useToast();
  const [form, setForm] = useState<StoreSettings>(settings.store);
  const [errors, setErrors] = useState<{ storeName?: string; storeEmail?: string; storeAddress?: string }>({});

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors: typeof errors = {};
    if (form.storeName.trim().length < 2) {
      nextErrors.storeName = "Store name must be at least 2 characters.";
    }
    if (!EMAIL_PATTERN.test(form.storeEmail)) {
      nextErrors.storeEmail = "Enter a valid email address.";
    }
    if (form.storeAddress.trim().length < 5) {
      nextErrors.storeAddress = "Enter a valid store address.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    updateStoreSettings(form);
    showToast("success", "Store information updated successfully.");
  }

  return (
    <SettingsCard title="Store" description="Information about your storefront shown to customers.">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField label="Store name" error={errors.storeName}>
            <Input value={form.storeName} onChange={(event) => setForm((prev) => ({ ...prev, storeName: event.target.value }))} />
          </FormField>
          <FormField label="Store email" error={errors.storeEmail}>
            <Input
              type="email"
              value={form.storeEmail}
              onChange={(event) => setForm((prev) => ({ ...prev, storeEmail: event.target.value }))}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField label="Currency">
            <Select
              value={form.storeCurrency}
              onChange={(event) => setForm((prev) => ({ ...prev, storeCurrency: event.target.value }))}
            >
              {CURRENCIES.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </Select>
          </FormField>
          <FormField label="Support phone">
            <Input
              value={form.supportPhone}
              onChange={(event) => setForm((prev) => ({ ...prev, supportPhone: event.target.value }))}
            />
          </FormField>
        </div>

        <FormField label="Store address" error={errors.storeAddress}>
          <Input value={form.storeAddress} onChange={(event) => setForm((prev) => ({ ...prev, storeAddress: event.target.value }))} />
        </FormField>

        <div className="flex justify-end">
          <Button type="submit">Save Store Info</Button>
        </div>
      </form>
    </SettingsCard>
  );
}
