import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "gray" | "green" | "amber" | "red" | "blue" | "indigo";

const toneClasses: Record<BadgeTone, string> = {
  gray: "bg-gray-100 text-gray-700",
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  red: "bg-red-50 text-red-700",
  blue: "bg-blue-50 text-blue-700",
  indigo: "bg-indigo-50 text-indigo-700",
};

export function Badge({ tone = "gray", children }: { tone?: BadgeTone; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap",
        toneClasses[tone],
      )}
    >
      {children}
    </span>
  );
}
