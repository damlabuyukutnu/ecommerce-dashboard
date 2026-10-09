import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { formatPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  change: number;
  icon: LucideIcon;
}

export function StatCard({ label, value, change, icon: Icon }: StatCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50">
          <Icon className="h-5 w-5 text-indigo-600" />
        </div>
      </div>
      <p className="mt-3 font-mono text-2xl font-semibold text-gray-900">{value}</p>
      <div className="mt-2 flex items-center gap-1">
        <span
          className={cn(
            "flex items-center gap-0.5 text-sm font-medium",
            isPositive ? "text-emerald-600" : "text-red-600",
          )}
        >
          {isPositive ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
          {formatPercent(change)}
        </span>
        <span className="text-sm text-gray-400">vs last period</span>
      </div>
    </div>
  );
}
