import { useMemo, useState } from "react";

export function usePagination<T>(items: T[], pageSize: number) {
  const [page, setPage] = useState(1);

  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(page, pageCount);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, safePage, pageSize]);

  const setPageSafe = (next: number) => {
    setPage(Math.min(Math.max(1, next), pageCount));
  };

  return { page: safePage, pageCount, pageItems, setPage: setPageSafe, totalItems: items.length, pageSize };
}
