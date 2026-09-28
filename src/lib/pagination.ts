"use client";

import { useState, useCallback } from "react";

export function usePaginatedList<T>(items: T[], pageSize: number) {
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const hasMore = visibleCount < items.length;

  const showMore = useCallback(() => {
    setVisibleCount((prev) => prev + pageSize);
  }, [pageSize]);

  const visibleItems = items.slice(0, visibleCount);

  return { visibleItems, hasMore, showMore, visibleCount };
}
