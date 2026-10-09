import { Badge } from "@/components/ui/Badge";
import type { OrderStatus } from "@/types";

const STATUS_CONFIG: Record<OrderStatus, { label: string; tone: "gray" | "green" | "amber" | "red" | "blue" | "indigo" }> = {
  pending: { label: "Pending", tone: "gray" },
  processing: { label: "Processing", tone: "blue" },
  shipped: { label: "Shipped", tone: "indigo" },
  delivered: { label: "Delivered", tone: "green" },
  cancelled: { label: "Cancelled", tone: "red" },
};

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const config = STATUS_CONFIG[status];
  return <Badge tone={config.tone}>{config.label}</Badge>;
}

export const orderStatusOptions: { value: OrderStatus; label: string }[] = (
  Object.entries(STATUS_CONFIG) as [OrderStatus, { label: string }][]
).map(([value, config]) => ({ value, label: config.label }));
