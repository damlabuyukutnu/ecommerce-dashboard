import Link from "next/link";
import type { Order } from "@/types";
import { orderTotal } from "@/lib/metrics";
import { formatCurrency, formatDate } from "@/lib/format";
import { OrderStatusBadge } from "@/components/orders/OrderStatusBadge";

export function RecentOrdersTable({ orders }: { orders: Order[] }) {
  const recent = orders.slice(0, 6);

  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">Recent Orders</h2>
        <Link href="/orders" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          View all
        </Link>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-gray-500">
            <th className="px-5 py-2 font-medium">Order</th>
            <th className="px-5 py-2 font-medium">Customer</th>
            <th className="px-5 py-2 font-medium">Date</th>
            <th className="px-5 py-2 font-medium">Status</th>
            <th className="px-5 py-2 text-right font-medium">Total</th>
          </tr>
        </thead>
        <tbody>
          {recent.map((order) => (
            <tr key={order.id} className="border-t border-gray-100">
              <td className="px-5 py-3 font-mono text-gray-900">{order.id}</td>
              <td className="px-5 py-3 text-gray-700">{order.customerName}</td>
              <td className="px-5 py-3 text-gray-500">{formatDate(order.date)}</td>
              <td className="px-5 py-3">
                <OrderStatusBadge status={order.status} />
              </td>
              <td className="px-5 py-3 text-right font-mono text-gray-900">{formatCurrency(orderTotal(order))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
