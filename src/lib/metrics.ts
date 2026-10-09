import type { Order, OrderStatus, Product, TimeRange } from "@/types";

const DAY_MS = 86400000;

export function orderTotal(order: Order): number {
  return order.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

export function getReferenceToday(orders: Order[]): Date {
  if (orders.length === 0) {
    return new Date();
  }
  const latest = orders.reduce((max, order) => (order.date > max ? order.date : max), orders[0].date);
  return new Date(`${latest}T00:00:00`);
}

function daysAgo(date: Date, days: number): Date {
  return new Date(date.getTime() - days * DAY_MS);
}

export function ordersInRange(orders: Order[], start: Date, end: Date): Order[] {
  return orders.filter((order) => {
    const time = new Date(`${order.date}T00:00:00`).getTime();
    return time >= start.getTime() && time <= end.getTime();
  });
}

export function percentChange(current: number, previous: number): number {
  if (previous === 0) {
    return current === 0 ? 0 : 100;
  }
  return ((current - previous) / previous) * 100;
}

export interface DashboardMetrics {
  totalRevenue: number;
  totalOrders: number;
  totalProducts: number;
  totalCustomers: number;
  revenueChange: number;
  ordersChange: number;
  productsChange: number;
  customersChange: number;
}

export function computeDashboardMetrics(
  orders: Order[],
  products: Product[],
  customerCount: number,
): DashboardMetrics {
  const today = getReferenceToday(orders);
  const currentStart = daysAgo(today, 29);
  const previousStart = daysAgo(today, 59);
  const previousEnd = daysAgo(today, 30);

  const currentOrders = ordersInRange(orders, currentStart, today).filter((o) => o.status !== "cancelled");
  const previousOrders = ordersInRange(orders, previousStart, previousEnd).filter((o) => o.status !== "cancelled");

  const currentRevenue = currentOrders.reduce((sum, o) => sum + orderTotal(o), 0);
  const previousRevenue = previousOrders.reduce((sum, o) => sum + orderTotal(o), 0);

  const currentCustomerIds = new Set(currentOrders.map((o) => o.customerId));
  const previousCustomerIds = new Set(previousOrders.map((o) => o.customerId));

  const activeProducts = products.filter((p) => p.status !== "archived");
  const previousProductsEstimate = Math.max(activeProducts.length - 2, 0);

  return {
    totalRevenue: orders.filter((o) => o.status !== "cancelled").reduce((sum, o) => sum + orderTotal(o), 0),
    totalOrders: orders.length,
    totalProducts: activeProducts.length,
    totalCustomers: customerCount,
    revenueChange: percentChange(currentRevenue, previousRevenue),
    ordersChange: percentChange(currentOrders.length, previousOrders.length),
    productsChange: percentChange(activeProducts.length, previousProductsEstimate),
    customersChange: percentChange(currentCustomerIds.size, previousCustomerIds.size),
  };
}

export interface RevenuePoint {
  label: string;
  revenue: number;
  orders: number;
}

export function monthlyRevenueSeries(orders: Order[], months: number): RevenuePoint[] {
  const today = getReferenceToday(orders);
  const buckets: RevenuePoint[] = [];
  for (let i = months - 1; i >= 0; i -= 1) {
    const bucketDate = new Date(today.getFullYear(), today.getMonth() - i, 1);
    const label = bucketDate.toLocaleDateString("en-US", { month: "short" });
    const monthOrders = orders.filter((order) => {
      const orderDate = new Date(`${order.date}T00:00:00`);
      return (
        orderDate.getFullYear() === bucketDate.getFullYear() &&
        orderDate.getMonth() === bucketDate.getMonth() &&
        order.status !== "cancelled"
      );
    });
    buckets.push({
      label,
      revenue: monthOrders.reduce((sum, o) => sum + orderTotal(o), 0),
      orders: monthOrders.length,
    });
  }
  return buckets;
}

export function dailyRevenueSeries(orders: Order[], days: number): RevenuePoint[] {
  const today = getReferenceToday(orders);
  const buckets: RevenuePoint[] = [];
  for (let i = days - 1; i >= 0; i -= 1) {
    const bucketDate = daysAgo(today, i);
    const label = bucketDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const dayOrders = orders.filter((order) => order.date === bucketDate.toISOString().slice(0, 10) && order.status !== "cancelled");
    buckets.push({
      label,
      revenue: dayOrders.reduce((sum, o) => sum + orderTotal(o), 0),
      orders: dayOrders.length,
    });
  }
  return buckets;
}

export function weeklyRevenueSeries(orders: Order[], weeks: number): RevenuePoint[] {
  const today = getReferenceToday(orders);
  const buckets: RevenuePoint[] = [];
  for (let i = weeks - 1; i >= 0; i -= 1) {
    const weekEnd = daysAgo(today, i * 7);
    const weekStart = daysAgo(weekEnd, 6);
    const label = weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const weekOrders = ordersInRange(orders, weekStart, weekEnd).filter((o) => o.status !== "cancelled");
    buckets.push({
      label,
      revenue: weekOrders.reduce((sum, o) => sum + orderTotal(o), 0),
      orders: weekOrders.length,
    });
  }
  return buckets;
}

export function revenueSeriesForRange(orders: Order[], range: TimeRange): RevenuePoint[] {
  if (range === "7d") return dailyRevenueSeries(orders, 7);
  if (range === "30d") return dailyRevenueSeries(orders, 30);
  if (range === "90d") return weeklyRevenueSeries(orders, 13);
  return monthlyRevenueSeries(orders, 12);
}

export interface AnalyticsSummary {
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  activeCustomers: number;
}

export function computeAnalyticsSummary(orders: Order[]): AnalyticsSummary {
  const validOrders = orders.filter((o) => o.status !== "cancelled");
  const totalRevenue = validOrders.reduce((sum, o) => sum + orderTotal(o), 0);
  const activeCustomers = new Set(validOrders.map((o) => o.customerId)).size;
  return {
    totalRevenue,
    totalOrders: orders.length,
    averageOrderValue: validOrders.length === 0 ? 0 : totalRevenue / validOrders.length,
    activeCustomers,
  };
}

export interface TopProduct {
  productId: string;
  name: string;
  unitsSold: number;
  revenue: number;
}

export function topSellingProducts(orders: Order[], limit: number): TopProduct[] {
  const map = new Map<string, TopProduct>();
  for (const order of orders) {
    if (order.status === "cancelled") continue;
    for (const item of order.items) {
      const existing = map.get(item.productId);
      const revenue = item.quantity * item.unitPrice;
      if (existing) {
        existing.unitsSold += item.quantity;
        existing.revenue += revenue;
      } else {
        map.set(item.productId, {
          productId: item.productId,
          name: item.productName,
          unitsSold: item.quantity,
          revenue,
        });
      }
    }
  }
  return Array.from(map.values())
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, limit);
}

export function orderStatusSummary(orders: Order[]): Record<OrderStatus, number> {
  const summary: Record<OrderStatus, number> = {
    pending: 0,
    processing: 0,
    shipped: 0,
    delivered: 0,
    cancelled: 0,
  };
  for (const order of orders) {
    summary[order.status] += 1;
  }
  return summary;
}

export function filterOrdersByRange(orders: Order[], range: TimeRange): Order[] {
  const today = getReferenceToday(orders);
  const rangeDays: Record<TimeRange, number> = {
    "7d": 6,
    "30d": 29,
    "90d": 89,
    "12m": 364,
  };
  const start = daysAgo(today, rangeDays[range]);
  return ordersInRange(orders, start, today);
}

export function customerAggregates(customerId: string, orders: Order[]): { totalOrders: number; totalSpent: number } {
  const customerOrders = orders.filter((o) => o.customerId === customerId);
  const validOrders = customerOrders.filter((o) => o.status !== "cancelled");
  return {
    totalOrders: customerOrders.length,
    totalSpent: validOrders.reduce((sum, o) => sum + orderTotal(o), 0),
  };
}
