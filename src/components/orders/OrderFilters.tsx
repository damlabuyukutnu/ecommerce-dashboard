"use client";

import { Search } from "lucide-react";
import { Select } from "@/components/ui/Select";
import { orderStatusOptions } from "@/components/orders/OrderStatusBadge";

interface OrderFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
}

export function OrderFilters({ search, onSearchChange, status, onStatusChange }: OrderFiltersProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1 sm:max-w-xs">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by order # or customer..."
          className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600/30"
        />
      </div>
      <div className="w-full sm:w-48">
        <Select value={status} onChange={(event) => onStatusChange(event.target.value)}>
          <option value="">All statuses</option>
          {orderStatusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}
