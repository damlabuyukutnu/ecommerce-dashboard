import { Badge } from "@/components/ui/Badge";
import type { ProductStatus } from "@/types";

const CONFIG: Record<ProductStatus, { label: string; tone: "gray" | "green" | "amber" }> = {
  active: { label: "Active", tone: "green" },
  draft: { label: "Draft", tone: "amber" },
  archived: { label: "Archived", tone: "gray" },
};

export function ProductStatusBadge({ status }: { status: ProductStatus }) {
  const config = CONFIG[status];
  return <Badge tone={config.tone}>{config.label}</Badge>;
}
