"use client";

import { useMemo, useState } from "react";
import { Search, Users } from "lucide-react";
import { useAppData } from "@/context/AppDataContext";
import { usePagination } from "@/hooks/usePagination";
import { EmptyState } from "@/components/ui/EmptyState";
import { Pagination } from "@/components/ui/Pagination";
import { CustomersTable } from "@/components/customers/CustomersTable";
import { CustomerDetailModal } from "@/components/customers/CustomerDetailModal";
import type { Customer } from "@/types";

const PAGE_SIZE = 8;

export function CustomersView() {
  const { customers, orders, isHydrated } = useAppData();
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const filteredCustomers = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (query.length === 0) return customers;
    return customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(query) || customer.email.toLowerCase().includes(query),
    );
  }, [customers, search]);

  const { page, pageCount, pageItems, setPage, totalItems } = usePagination(filteredCustomers, PAGE_SIZE);

  if (!isHydrated) {
    return <div className="h-96 animate-pulse rounded-xl border border-gray-200 bg-white" />;
  }

  return (
    <div className="space-y-4">
      <div className="relative max-w-xs">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search customers..."
          className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600/30"
        />
      </div>

      <div className="rounded-xl border border-gray-200 bg-white">
        {filteredCustomers.length === 0 ? (
          <EmptyState icon={Users} title="No customers found" description="Try a different search term." />
        ) : (
          <>
            <CustomersTable customers={pageItems} orders={orders} onView={setSelectedCustomer} />
            <Pagination page={page} pageCount={pageCount} onPageChange={setPage} totalItems={totalItems} pageSize={PAGE_SIZE} />
          </>
        )}
      </div>

      <CustomerDetailModal customer={selectedCustomer} orders={orders} onClose={() => setSelectedCustomer(null)} />
    </div>
  );
}
