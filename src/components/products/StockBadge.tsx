import { Badge } from "@/components/ui/Badge";

export function StockBadge({ stock }: { stock: number }) {
  if (stock === 0) {
    return <Badge tone="red">Out of stock</Badge>;
  }
  if (stock < 10) {
    return <Badge tone="amber">Low stock</Badge>;
  }
  return <Badge tone="green">In stock</Badge>;
}
