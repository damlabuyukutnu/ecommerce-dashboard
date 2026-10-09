import type { ProductCategory, ProductStatus } from "@/types";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Books",
  "Sports",
  "Beauty",
];

export const PRODUCT_STATUSES: { value: ProductStatus; label: string }[] = [
  { value: "active", label: "Active" },
  { value: "draft", label: "Draft" },
  { value: "archived", label: "Archived" },
];
