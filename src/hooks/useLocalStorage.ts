"use client";

import React from "react";

const useLocalStorage = <T>(key: string, initialValue: T): [T | null, (value: T) => void] => {
  const [storedValue, setStoredValue] = React.useState<T | null>(null);

  React.useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      setStoredValue(initialValue);
    }
  }, [key, initialValue]);

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // DO NOTHING
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
