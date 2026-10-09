import { cn } from "@/lib/utils";
import type { TimeRange } from "@/types";

const OPTIONS: { value: TimeRange; label: string }[] = [
  { value: "7d", label: "7 days" },
  { value: "30d", label: "30 days" },
  { value: "90d", label: "90 days" },
  { value: "12m", label: "12 months" },
];

export function TimeRangeSelector({ value, onChange }: { value: TimeRange; onChange: (value: TimeRange) => void }) {
  return (
    <div className="inline-flex rounded-lg border border-gray-300 bg-white p-1">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
            value === option.value ? "bg-indigo-600 text-white" : "text-gray-600 hover:bg-gray-100",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
