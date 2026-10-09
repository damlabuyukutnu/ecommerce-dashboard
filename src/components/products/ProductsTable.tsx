import { Pencil, Trash2 } from "lucide-react";
import type { Product } from "@/types";
import { formatCurrency, formatNumber } from "@/lib/format";
import { StockBadge } from "@/components/products/StockBadge";
import { ProductStatusBadge } from "@/components/products/ProductStatusBadge";
import { ProductThumb } from "@/components/ui/Avatar";

interface ProductsTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export function ProductsTable({ products, onEdit, onDelete }: ProductsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-left text-xs text-gray-500">
            <th className="px-5 py-3 font-medium">Product</th>
            <th className="px-5 py-3 font-medium">Category</th>
            <th className="px-5 py-3 font-medium">Price</th>
            <th className="px-5 py-3 font-medium">Stock</th>
            <th className="px-5 py-3 font-medium">Status</th>
            <th className="px-5 py-3 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
              <td className="px-5 py-3">
                <div className="flex items-center gap-3">
                  <ProductThumb name={product.name} />
                  <div className="min-w-0">
                    <p className="truncate font-medium text-gray-900">{product.name}</p>
                    <p className="font-mono text-xs text-gray-400">{product.sku}</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3 text-gray-600">{product.category}</td>
              <td className="px-5 py-3 font-mono text-gray-900">{formatCurrency(product.price)}</td>
              <td className="px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-gray-700">{formatNumber(product.stock)}</span>
                  <StockBadge stock={product.stock} />
                </div>
              </td>
              <td className="px-5 py-3">
                <ProductStatusBadge status={product.status} />
              </td>
              <td className="px-5 py-3">
                <div className="flex items-center justify-end gap-1">
                  <button
                    type="button"
                    onClick={() => onEdit(product)}
                    className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-indigo-600"
                    aria-label={`Edit ${product.name}`}
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(product)}
                    className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-red-600"
                    aria-label={`Delete ${product.name}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
