import type { ReactNode } from "react";
import { AppDataProvider } from "@/context/AppDataContext";
import { ToastProvider } from "@/components/ui/ToastProvider";
import { DashboardShell } from "@/components/layout/DashboardShell";

export default function DashboardGroupLayout({ children }: { children: ReactNode }) {
  return (
    <AppDataProvider>
      <ToastProvider>
        <DashboardShell>{children}</DashboardShell>
      </ToastProvider>
    </AppDataProvider>
  );
}
