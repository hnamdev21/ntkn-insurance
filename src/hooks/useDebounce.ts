"use client";

import React from "react";

/**
 * Debounce a value
 * @param value The value to debounce
 * @param delay The delay in ms
 * @returns The debounced value
 */
const useDebounce = <T>(value: T, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
