"use client";

import { useMemo, useState } from "react";
import { useAppData } from "@/context/AppDataContext";
import { computeAnalyticsSummary, filterOrdersByRange, revenueSeriesForRange, topSellingProducts } from "@/lib/metrics";
import { TimeRangeSelector } from "@/components/analytics/TimeRangeSelector";
import { KpiGrid } from "@/components/analytics/KpiGrid";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { OrdersBarChart } from "@/components/analytics/OrdersBarChart";
import { TopProductsList } from "@/components/dashboard/TopProductsList";
import type { TimeRange } from "@/types";

export function AnalyticsView() {
  const { orders, isHydrated } = useAppData();
  const [range, setRange] = useState<TimeRange>("30d");

  const rangeOrders = useMemo(() => filterOrdersByRange(orders, range), [orders, range]);
  const summary = useMemo(() => computeAnalyticsSummary(rangeOrders), [rangeOrders]);
  const series = useMemo(() => revenueSeriesForRange(orders, range), [orders, range]);
  const topProducts = useMemo(() => topSellingProducts(rangeOrders, 5), [rangeOrders]);

  if (!isHydrated) {
    return <div className="h-96 animate-pulse rounded-xl border border-gray-200 bg-white" />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">Performance overview for the selected period</p>
        <TimeRangeSelector value={range} onChange={setRange} />
      </div>

      <KpiGrid summary={summary} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-gray-900">Revenue Trend</h2>
          <div className="mt-4">
            <RevenueChart data={series} />
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-gray-900">Orders Volume</h2>
          <div className="mt-4">
            <OrdersBarChart data={series} />
          </div>
        </div>
      </div>

      <TopProductsList products={topProducts} />
    </div>
  );
}
