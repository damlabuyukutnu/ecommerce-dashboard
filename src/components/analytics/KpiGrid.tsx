import type { AnalyticsSummary } from "@/lib/metrics";
import { formatCurrency, formatNumber } from "@/lib/format";

export function KpiGrid({ summary }: { summary: AnalyticsSummary }) {
  const items = [
    { label: "Revenue", value: formatCurrency(summary.totalRevenue) },
    { label: "Orders", value: formatNumber(summary.totalOrders) },
    { label: "Average Order Value", value: formatCurrency(Math.round(summary.averageOrderValue)) },
    { label: "Active Customers", value: formatNumber(summary.activeCustomers) },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="text-sm font-medium text-gray-500">{item.label}</p>
          <p className="mt-2 font-mono text-2xl font-semibold text-gray-900">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
