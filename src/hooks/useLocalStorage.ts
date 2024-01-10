"use client";

import React from "react";

const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

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
