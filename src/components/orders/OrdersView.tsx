"use client";

import { useMemo, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useAppData } from "@/context/AppDataContext";
import { useToast } from "@/components/ui/ToastProvider";
import { usePagination } from "@/hooks/usePagination";
import { EmptyState } from "@/components/ui/EmptyState";
import { Pagination } from "@/components/ui/Pagination";
import { OrderFilters } from "@/components/orders/OrderFilters";
import { OrdersTable } from "@/components/orders/OrdersTable";
import { OrderDetailModal } from "@/components/orders/OrderDetailModal";
import { orderStatusOptions } from "@/components/orders/OrderStatusBadge";
import type { Order, OrderStatus } from "@/types";

const PAGE_SIZE = 8;

export function OrdersView() {
  const { orders, isHydrated, updateOrderStatus } = useAppData();
  const { showToast } = useToast();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = useMemo(() => {
    const query = search.trim().toLowerCase();
    return orders.filter((order) => {
      const matchesSearch =
        query.length === 0 ||
        order.id.toLowerCase().includes(query) ||
        order.customerName.toLowerCase().includes(query);
      const matchesStatus = status === "" || order.status === status;
      return matchesSearch && matchesStatus;
    });
  }, [orders, search, status]);

  const { page, pageCount, pageItems, setPage, totalItems } = usePagination(filteredOrders, PAGE_SIZE);

  const selectedLive = selectedOrder ? orders.find((order) => order.id === selectedOrder.id) ?? null : null;

  function handleUpdateStatus(id: string, nextStatus: OrderStatus) {
    updateOrderStatus(id, nextStatus);
    const label = orderStatusOptions.find((option) => option.value === nextStatus)?.label ?? nextStatus;
    showToast("success", `${id} marked as ${label}.`);
  }

  if (!isHydrated) {
    return <div className="h-96 animate-pulse rounded-xl border border-gray-200 bg-white" />;
  }

  return (
    <div className="space-y-4">
      <OrderFilters search={search} onSearchChange={setSearch} status={status} onStatusChange={setStatus} />

      <div className="rounded-xl border border-gray-200 bg-white">
        {filteredOrders.length === 0 ? (
          <EmptyState icon={ShoppingCart} title="No orders found" description="Try adjusting your search or status filter." />
        ) : (
          <>
            <OrdersTable orders={pageItems} onView={setSelectedOrder} />
            <Pagination page={page} pageCount={pageCount} onPageChange={setPage} totalItems={totalItems} pageSize={PAGE_SIZE} />
          </>
        )}
      </div>

      <OrderDetailModal order={selectedLive} onClose={() => setSelectedOrder(null)} onUpdateStatus={handleUpdateStatus} />
    </div>
  );
}
