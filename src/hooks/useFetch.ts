"use client";

import { useEffect, useState } from "react";

export default function useFetch<T>(
  fetchFn: () => Promise<T>,
  autoFetch = true
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const run = async () => {
    try {
      setLoading(true);
      setError(null);
      setData(await fetchFn());
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  useEffect(() => {
    if (autoFetch) run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error, refetch: run, reset };
}
