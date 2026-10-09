import { Eye } from "lucide-react";
import type { Customer, Order } from "@/types";
import { customerAggregates } from "@/lib/metrics";
import { formatCurrency, formatDate, formatNumber } from "@/lib/format";
import { Avatar } from "@/components/ui/Avatar";

interface CustomersTableProps {
  customers: Customer[];
  orders: Order[];
  onView: (customer: Customer) => void;
}

export function CustomersTable({ customers, orders, onView }: CustomersTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-left text-xs text-gray-500">
            <th className="px-5 py-3 font-medium">Customer</th>
            <th className="px-5 py-3 font-medium">Location</th>
            <th className="px-5 py-3 font-medium">Joined</th>
            <th className="px-5 py-3 font-medium">Orders</th>
            <th className="px-5 py-3 font-medium">Total Spent</th>
            <th className="px-5 py-3 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            const { totalOrders, totalSpent } = customerAggregates(customer.id, orders);
            return (
              <tr key={customer.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar name={customer.name} size="sm" />
                    <div className="min-w-0">
                      <p className="truncate font-medium text-gray-900">{customer.name}</p>
                      <p className="truncate text-xs text-gray-500">{customer.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-gray-600">{customer.location}</td>
                <td className="px-5 py-3 text-gray-500">{formatDate(customer.joinedAt)}</td>
                <td className="px-5 py-3 font-mono text-gray-700">{formatNumber(totalOrders)}</td>
                <td className="px-5 py-3 font-mono text-gray-900">{formatCurrency(totalSpent)}</td>
                <td className="px-5 py-3">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => onView(customer)}
                      className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-indigo-600"
                      aria-label={`View ${customer.name}`}
                    >
                      <Eye className="h-4 w-4" />
                      <span className="text-xs font-medium">View</span>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
