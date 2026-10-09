"use client";

import { SettingsCard } from "@/components/settings/SettingsCard";
import { Switch } from "@/components/ui/Switch";
import { useAppData } from "@/context/AppDataContext";
import { useToast } from "@/components/ui/ToastProvider";
import type { PreferenceSettings } from "@/types";

export function PreferencesForm() {
  const { settings, updatePreferenceSettings } = useAppData();
  const { showToast } = useToast();

  function handleToggle(key: keyof PreferenceSettings, value: boolean) {
    updatePreferenceSettings({ ...settings.preferences, [key]: value });
    showToast("success", "Preference updated.");
  }

  return (
    <SettingsCard title="Preferences" description="Customize how the admin panel behaves for you.">
      <div className="divide-y divide-gray-100">
        <Switch
          label="Compact tables"
          description="Reduce row height across tables for a denser view."
          checked={settings.preferences.compactTables}
          onChange={(value) => handleToggle("compactTables", value)}
        />
        <Switch
          label="Email notifications"
          description="Receive email alerts for new orders and low stock."
          checked={settings.preferences.emailNotifications}
          onChange={(value) => handleToggle("emailNotifications", value)}
        />
        <Switch
          label="Weekly summary"
          description="Get a weekly performance summary every Monday."
          checked={settings.preferences.weeklySummary}
          onChange={(value) => handleToggle("weeklySummary", value)}
        />
      </div>
    </SettingsCard>
  );
}
