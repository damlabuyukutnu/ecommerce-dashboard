import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
}

export function Select({ error, className, children, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        className={cn(
          "w-full appearance-none rounded-lg border bg-white px-3 py-2 pr-9 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600/30",
          error ? "border-red-400" : "border-gray-300 focus:border-indigo-500",
          className ?? "",
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
