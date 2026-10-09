import { readStorage, writeStorage } from "@/lib/storage";

type Listener = () => void;
type Updater<T> = T | ((prev: T) => T);

export function createLocalStore<T>(key: string, seed: T) {
  let current = seed;
  let hasReadFromStorage = false;
  const listeners = new Set<Listener>();

  function getSnapshot(): T {
    if (!hasReadFromStorage) {
      current = readStorage(key, seed);
      hasReadFromStorage = true;
    }
    return current;
  }

  function getServerSnapshot(): T {
    return seed;
  }

  function subscribe(listener: Listener): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  function setValue(updater: Updater<T>): void {
    const next = typeof updater === "function" ? (updater as (prev: T) => T)(getSnapshot()) : updater;
    current = next;
    hasReadFromStorage = true;
    writeStorage(key, next);
    listeners.forEach((listener) => listener());
  }

  return { getSnapshot, getServerSnapshot, subscribe, setValue };
}
