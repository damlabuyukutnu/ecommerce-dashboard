"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { pageTitles } from "@/components/layout/nav-items";
import { Avatar } from "@/components/ui/Avatar";
import { useAppData } from "@/context/AppDataContext";

export function Header({ onOpenMobile }: { onOpenMobile: () => void }) {
  const pathname = usePathname();
  const { settings } = useAppData();
  const title = pageTitles[pathname] ?? "Dashboard";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobile}
          className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-base font-semibold text-gray-900">{title}</h1>
      </div>
      <Link href="/settings" className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-gray-50">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-medium text-gray-900">{settings.profile.fullName}</p>
          <p className="text-xs text-gray-500">{settings.profile.role}</p>
        </div>
        <Avatar name={settings.profile.fullName} size="sm" />
      </Link>
    </header>
  );
}
