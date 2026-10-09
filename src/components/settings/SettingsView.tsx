"use client";

import { useAppData } from "@/context/AppDataContext";
import { ProfileForm } from "@/components/settings/ProfileForm";
import { StoreForm } from "@/components/settings/StoreForm";
import { PreferencesForm } from "@/components/settings/PreferencesForm";

export function SettingsView() {
  const { isHydrated } = useAppData();

  if (!isHydrated) {
    return (
      <div className="space-y-6">
        <div className="h-64 animate-pulse rounded-xl border border-gray-200 bg-white" />
        <div className="h-64 animate-pulse rounded-xl border border-gray-200 bg-white" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl space-y-6">
      <ProfileForm />
      <StoreForm />
      <PreferencesForm />
    </div>
  );
}
