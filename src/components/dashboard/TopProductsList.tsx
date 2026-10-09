import type { TopProduct } from "@/lib/metrics";
import { formatCurrency, formatNumber } from "@/lib/format";
import { ProductThumb } from "@/components/ui/Avatar";

export function TopProductsList({ products }: { products: TopProduct[] }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <h2 className="text-sm font-semibold text-gray-900">Top Selling Products</h2>
      {products.length === 0 && <p className="mt-4 text-sm text-gray-500">No sales recorded for this period.</p>}
      {products.length > 0 && (
        <ul className="mt-4 space-y-4">
          {products.map((product) => (
            <li key={product.productId} className="flex items-center gap-3">
              <ProductThumb name={product.name} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900">{product.name}</p>
                <p className="text-xs text-gray-500">{formatNumber(product.unitsSold)} units sold</p>
              </div>
              <p className="font-mono text-sm font-semibold text-gray-900">{formatCurrency(product.revenue)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
