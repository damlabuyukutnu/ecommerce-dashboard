"use client";

import { useMemo } from "react";
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import { useAppData } from "@/context/AppDataContext";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { RecentOrdersTable } from "@/components/dashboard/RecentOrdersTable";
import { TopProductsList } from "@/components/dashboard/TopProductsList";
import { OrderStatusSummary } from "@/components/dashboard/OrderStatusSummary";
import { computeDashboardMetrics, monthlyRevenueSeries, orderStatusSummary, topSellingProducts } from "@/lib/metrics";
import { formatCurrency, formatNumber } from "@/lib/format";

export function DashboardView() {
  const { orders, products, customers, isHydrated } = useAppData();

  const metrics = useMemo(() => computeDashboardMetrics(orders, products, customers.length), [orders, products, customers]);
  const revenueSeries = useMemo(() => monthlyRevenueSeries(orders, 6), [orders]);
  const topProducts = useMemo(() => topSellingProducts(orders, 5), [orders]);
  const statusSummary = useMemo(() => orderStatusSummary(orders), [orders]);

  if (!isHydrated) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-32 animate-pulse rounded-xl border border-gray-200 bg-white" />
          ))}
        </div>
        <div className="h-80 animate-pulse rounded-xl border border-gray-200 bg-white" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Revenue" value={formatCurrency(metrics.totalRevenue)} change={metrics.revenueChange} icon={DollarSign} />
        <StatCard label="Total Orders" value={formatNumber(metrics.totalOrders)} change={metrics.ordersChange} icon={ShoppingCart} />
        <StatCard label="Total Products" value={formatNumber(metrics.totalProducts)} change={metrics.productsChange} icon={Package} />
        <StatCard label="Total Customers" value={formatNumber(metrics.totalCustomers)} change={metrics.customersChange} icon={Users} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5 lg:col-span-2">
          <h2 className="text-sm font-semibold text-gray-900">Revenue Overview</h2>
          <p className="text-sm text-gray-500">Monthly revenue for the last 6 months</p>
          <div className="mt-4">
            <RevenueChart data={revenueSeries} />
          </div>
        </div>
        <OrderStatusSummary summary={statusSummary} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentOrdersTable orders={orders} />
        </div>
        <TopProductsList products={topProducts} />
      </div>
    </div>
  );
}
