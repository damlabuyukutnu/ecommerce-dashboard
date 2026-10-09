import { Eye } from "lucide-react";
import type { Order } from "@/types";
import { orderTotal } from "@/lib/metrics";
import { formatCurrency, formatDate } from "@/lib/format";
import { OrderStatusBadge } from "@/components/orders/OrderStatusBadge";

interface OrdersTableProps {
  orders: Order[];
  onView: (order: Order) => void;
}

export function OrdersTable({ orders, onView }: OrdersTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-left text-xs text-gray-500">
            <th className="px-5 py-3 font-medium">Order</th>
            <th className="px-5 py-3 font-medium">Customer</th>
            <th className="px-5 py-3 font-medium">Date</th>
            <th className="px-5 py-3 font-medium">Status</th>
            <th className="px-5 py-3 font-medium">Total</th>
            <th className="px-5 py-3 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
              <td className="px-5 py-3 font-mono text-gray-900">{order.id}</td>
              <td className="px-5 py-3 text-gray-700">{order.customerName}</td>
              <td className="px-5 py-3 text-gray-500">{formatDate(order.date)}</td>
              <td className="px-5 py-3">
                <OrderStatusBadge status={order.status} />
              </td>
              <td className="px-5 py-3 font-mono text-gray-900">{formatCurrency(orderTotal(order))}</td>
              <td className="px-5 py-3">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => onView(order)}
                    className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-indigo-600"
                    aria-label={`View ${order.id}`}
                  >
                    <Eye className="h-4 w-4" />
                    <span className="text-xs font-medium">View</span>
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
