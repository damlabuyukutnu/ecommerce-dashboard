"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { Label } from "@/components/ui/Input";
import { orderStatusOptions } from "@/components/orders/OrderStatusBadge";
import { orderTotal } from "@/lib/metrics";
import { formatCurrency, formatDate } from "@/lib/format";
import type { Order, OrderStatus } from "@/types";

interface OrderDetailModalProps {
  order: Order | null;
  onClose: () => void;
  onUpdateStatus: (id: string, status: OrderStatus) => void;
}

function OrderDetailBody({
  order,
  onUpdateStatus,
}: {
  order: Order;
  onUpdateStatus: (id: string, status: OrderStatus) => void;
}) {
  const [status, setStatus] = useState<OrderStatus>(order.status);
  const hasChanges = status !== order.status;

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Customer</p>
          <p className="font-medium text-gray-900">{order.customerName}</p>
        </div>
        <div>
          <p className="text-gray-500">Shipping address</p>
          <p className="font-medium text-gray-900">{order.shippingAddress}</p>
        </div>
      </div>

      <div>
        <Label>Order status</Label>
        <div className="mt-1.5 flex items-center gap-3">
          <Select value={status} onChange={(event) => setStatus(event.target.value as OrderStatus)} className="max-w-xs">
            {orderStatusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          {hasChanges ? (
            <Button size="sm" onClick={() => onUpdateStatus(order.id, status)}>
              Update Status
            </Button>
          ) : null}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">Items</p>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left text-xs text-gray-500">
                <th className="px-4 py-2 font-medium">Product</th>
                <th className="px-4 py-2 font-medium">Qty</th>
                <th className="px-4 py-2 text-right font-medium">Price</th>
                <th className="px-4 py-2 text-right font-medium">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                <tr key={item.productId} className="border-t border-gray-100">
                  <td className="px-4 py-2 text-gray-800">{item.productName}</td>
                  <td className="px-4 py-2 text-gray-600">{item.quantity}</td>
                  <td className="px-4 py-2 text-right font-mono text-gray-600">{formatCurrency(item.unitPrice)}</td>
                  <td className="px-4 py-2 text-right font-mono text-gray-900">
                    {formatCurrency(item.unitPrice * item.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <span className="text-sm font-medium text-gray-700">Order Total</span>
        <span className="font-mono text-base font-semibold text-gray-900">{formatCurrency(orderTotal(order))}</span>
      </div>
    </div>
  );
}

export function OrderDetailModal({ order, onClose, onUpdateStatus }: OrderDetailModalProps) {
  if (!order) return null;

  return (
    <Modal isOpen={order !== null} onClose={onClose} title={order.id} description={`Placed on ${formatDate(order.date)}`} widthClassName="max-w-xl">
      <OrderDetailBody key={order.id} order={order} onUpdateStatus={onUpdateStatus} />
    </Modal>
  );
}
