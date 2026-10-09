"use client";

import { useState } from "react";
import { SettingsCard } from "@/components/settings/SettingsCard";
import { FormField, Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { useAppData } from "@/context/AppDataContext";
import { useToast } from "@/components/ui/ToastProvider";
import type { ProfileSettings } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ProfileForm() {
  const { settings, updateProfileSettings } = useAppData();
  const { showToast } = useToast();
  const [form, setForm] = useState<ProfileSettings>(settings.profile);
  const [errors, setErrors] = useState<{ fullName?: string; email?: string }>({});

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors: { fullName?: string; email?: string } = {};
    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = "Full name must be at least 2 characters.";
    }
    if (!EMAIL_PATTERN.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    updateProfileSettings(form);
    showToast("success", "Profile updated successfully.");
  }

  return (
    <SettingsCard title="Profile" description="Your personal information shown across the admin panel.">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex items-center gap-4">
          <Avatar name={form.fullName || "User"} />
          <p className="text-sm text-gray-500">Avatar is generated automatically from your name.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField label="Full name" error={errors.fullName}>
            <Input value={form.fullName} onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))} />
          </FormField>
          <FormField label="Email" error={errors.email}>
            <Input
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            />
          </FormField>
        </div>

        <FormField label="Role">
          <Input value={form.role} onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value }))} />
        </FormField>

        <FormField label="Bio">
          <Textarea
            rows={3}
            value={form.bio}
            onChange={(event) => setForm((prev) => ({ ...prev, bio: event.target.value }))}
          />
        </FormField>

        <div className="flex justify-end">
          <Button type="submit">Save Profile</Button>
        </div>
      </form>
    </SettingsCard>
  );
}
