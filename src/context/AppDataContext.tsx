"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { seedCustomers, seedOrders, seedProducts, seedSettings } from "@/lib/mock-data";
import { createLocalStore } from "@/lib/local-store";
import { useIsHydrated } from "@/hooks/useIsHydrated";
import { generateId } from "@/lib/utils";
import type {
  AppSettings,
  Customer,
  Order,
  OrderStatus,
  PreferenceSettings,
  Product,
  ProfileSettings,
  StoreSettings,
} from "@/types";

const productsStore = createLocalStore("ecommerce-dashboard:products", seedProducts);
const ordersStore = createLocalStore("ecommerce-dashboard:orders", seedOrders);
const customersStore = createLocalStore("ecommerce-dashboard:customers", seedCustomers);
const settingsStore = createLocalStore("ecommerce-dashboard:settings", seedSettings);

export type ProductInput = Omit<Product, "id" | "createdAt">;

interface AppDataContextValue {
  isHydrated: boolean;
  products: Product[];
  orders: Order[];
  customers: Customer[];
  settings: AppSettings;
  addProduct: (input: ProductInput) => void;
  updateProduct: (id: string, input: ProductInput) => void;
  deleteProduct: (id: string) => void;
  updateOrderStatus: (id: string, status: OrderStatus) => void;
  updateStoreSettings: (input: StoreSettings) => void;
  updateProfileSettings: (input: ProfileSettings) => void;
  updatePreferenceSettings: (input: PreferenceSettings) => void;
}

const AppDataContext = createContext<AppDataContextValue | null>(null);

export function AppDataProvider({ children }: { children: ReactNode }) {
  const isHydrated = useIsHydrated();

  const products = useSyncExternalStore(productsStore.subscribe, productsStore.getSnapshot, productsStore.getServerSnapshot);
  const orders = useSyncExternalStore(ordersStore.subscribe, ordersStore.getSnapshot, ordersStore.getServerSnapshot);
  const customers = useSyncExternalStore(customersStore.subscribe, customersStore.getSnapshot, customersStore.getServerSnapshot);
  const settings = useSyncExternalStore(settingsStore.subscribe, settingsStore.getSnapshot, settingsStore.getServerSnapshot);

  const value = useMemo<AppDataContextValue>(
    () => ({
      isHydrated,
      products,
      orders,
      customers,
      settings,
      addProduct: (input) => {
        const newProduct: Product = {
          ...input,
          id: generateId("p"),
          createdAt: new Date().toISOString().slice(0, 10),
        };
        productsStore.setValue((prev) => [newProduct, ...prev]);
      },
      updateProduct: (id, input) => {
        productsStore.setValue((prev) => prev.map((product) => (product.id === id ? { ...product, ...input } : product)));
      },
      deleteProduct: (id) => {
        productsStore.setValue((prev) => prev.filter((product) => product.id !== id));
      },
      updateOrderStatus: (id, status) => {
        ordersStore.setValue((prev) => prev.map((order) => (order.id === id ? { ...order, status } : order)));
      },
      updateStoreSettings: (input) => {
        settingsStore.setValue((prev) => ({ ...prev, store: input }));
      },
      updateProfileSettings: (input) => {
        settingsStore.setValue((prev) => ({ ...prev, profile: input }));
      },
      updatePreferenceSettings: (input) => {
        settingsStore.setValue((prev) => ({ ...prev, preferences: input }));
      },
    }),
    [isHydrated, products, orders, customers, settings],
  );

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
}

export function useAppData(): AppDataContextValue {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error("useAppData must be used within AppDataProvider");
  }
  return context;
}
