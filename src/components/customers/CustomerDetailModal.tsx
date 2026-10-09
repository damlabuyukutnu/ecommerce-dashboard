import { Mail, MapPin, Phone } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Avatar } from "@/components/ui/Avatar";
import { OrderStatusBadge } from "@/components/orders/OrderStatusBadge";
import { customerAggregates, orderTotal } from "@/lib/metrics";
import { formatCurrency, formatDate } from "@/lib/format";
import type { Customer, Order } from "@/types";

interface CustomerDetailModalProps {
  customer: Customer | null;
  orders: Order[];
  onClose: () => void;
}

export function CustomerDetailModal({ customer, orders, onClose }: CustomerDetailModalProps) {
  if (!customer) return null;

  const customerOrders = orders.filter((order) => order.customerId === customer.id);
  const { totalOrders, totalSpent } = customerAggregates(customer.id, orders);

  return (
    <Modal isOpen={customer !== null} onClose={onClose} title="Customer Profile" widthClassName="max-w-xl">
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <Avatar name={customer.name} />
          <div>
            <p className="text-base font-semibold text-gray-900">{customer.name}</p>
            <p className="text-sm text-gray-500">Customer since {formatDate(customer.joinedAt)}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 rounded-lg border border-gray-200 p-4 sm:grid-cols-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Mail className="h-4 w-4 text-gray-400" />
            {customer.email}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone className="h-4 w-4 text-gray-400" />
            {customer.phone}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-gray-400" />
            {customer.location}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-xs text-gray-500">Total Orders</p>
            <p className="font-mono text-xl font-semibold text-gray-900">{totalOrders}</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-xs text-gray-500">Total Spent</p>
            <p className="font-mono text-xl font-semibold text-gray-900">{formatCurrency(totalSpent)}</p>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium text-gray-700">Order History</p>
          {customerOrders.length === 0 ? (
            <p className="text-sm text-gray-500">No orders yet.</p>
          ) : (
            <div className="max-h-64 overflow-y-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs text-gray-500">
                    <th className="px-4 py-2 font-medium">Order</th>
                    <th className="px-4 py-2 font-medium">Date</th>
                    <th className="px-4 py-2 font-medium">Status</th>
                    <th className="px-4 py-2 text-right font-medium">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {customerOrders.map((order) => (
                    <tr key={order.id} className="border-t border-gray-100">
                      <td className="px-4 py-2 font-mono text-gray-900">{order.id}</td>
                      <td className="px-4 py-2 text-gray-500">{formatDate(order.date)}</td>
                      <td className="px-4 py-2">
                        <OrderStatusBadge status={order.status} />
                      </td>
                      <td className="px-4 py-2 text-right font-mono text-gray-900">
                        {formatCurrency(orderTotal(order))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
