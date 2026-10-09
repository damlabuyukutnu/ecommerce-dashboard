export type ProductCategory =
  | "Electronics"
  | "Clothing"
  | "Home & Kitchen"
  | "Books"
  | "Sports"
  | "Beauty";

export type ProductStatus = "active" | "draft" | "archived";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  stock: number;
  status: ProductStatus;
  sku: string;
  createdAt: string;
}

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  date: string;
  status: OrderStatus;
  items: OrderItem[];
  shippingAddress: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinedAt: string;
  location: string;
}

export interface StoreSettings {
  storeName: string;
  storeEmail: string;
  storeCurrency: string;
  storeAddress: string;
  supportPhone: string;
}

export interface ProfileSettings {
  fullName: string;
  email: string;
  role: string;
  bio: string;
}

export interface PreferenceSettings {
  compactTables: boolean;
  emailNotifications: boolean;
  weeklySummary: boolean;
}

export interface AppSettings {
  store: StoreSettings;
  profile: ProfileSettings;
  preferences: PreferenceSettings;
}

export type TimeRange = "7d" | "30d" | "90d" | "12m";
