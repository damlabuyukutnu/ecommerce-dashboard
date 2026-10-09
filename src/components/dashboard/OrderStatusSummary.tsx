import type { OrderStatus } from "@/types";
import { formatNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

const STATUS_META: { status: OrderStatus; label: string; dotClass: string }[] = [
  { status: "pending", label: "Pending", dotClass: "bg-gray-400" },
  { status: "processing", label: "Processing", dotClass: "bg-blue-500" },
  { status: "shipped", label: "Shipped", dotClass: "bg-indigo-500" },
  { status: "delivered", label: "Delivered", dotClass: "bg-emerald-500" },
  { status: "cancelled", label: "Cancelled", dotClass: "bg-red-500" },
];

export function OrderStatusSummary({ summary }: { summary: Record<OrderStatus, number> }) {
  const total = Object.values(summary).reduce((sum, value) => sum + value, 0);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <h2 className="text-sm font-semibold text-gray-900">Order Status</h2>
      <div className="mt-4 space-y-3">
        {STATUS_META.map(({ status, label, dotClass }) => {
          const count = summary[status];
          const percent = total === 0 ? 0 : Math.round((count / total) * 100);
          return (
            <div key={status}>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-600">
                  <span className={cn("h-2 w-2 rounded-full", dotClass)} />
                  {label}
                </span>
                <span className="font-medium text-gray-900">{formatNumber(count)}</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full rounded-full bg-gray-100">
                <div className={cn("h-1.5 rounded-full", dotClass)} style={{ width: `${percent}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
