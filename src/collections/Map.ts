import type { IClassyMap } from "../types.js";

/**
 * ClassyMap<K, V>
 *
 * TODO :
 * 1. Internen nativen Map-Speicher anlegen (z. B. #map: Map<K, V>).
 * 2. Struktursignal/Versionstracker für Größen- und Keyänderungen.
 * 3. Optional: Per-Key Signals für feingranulares Value-Tracking.
 */
export class ClassyMap<K, V> implements IClassyMap<K, V> {
  constructor(entries?: readonly (readonly [K, V])[] | null) {
    // TODO: Initialisieren
  }

  get size(): number {
    throw new Error("TODO");
  }

  get(key: K): V | undefined {
    throw new Error("TODO");
  }

  has(key: K): boolean {
    throw new Error("TODO");
  }

  set(key: K, value: V): this {
    throw new Error("TODO");
  }

  delete(key: K): boolean {
    throw new Error("TODO");
  }

  clear(): void {
    throw new Error("TODO");
  }

  keys(): IterableIterator<K> {
    throw new Error("TODO");
  }

  values(): IterableIterator<V> {
    throw new Error("TODO");
  }

  entries(): IterableIterator<[K, V]> {
    throw new Error("TODO");
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    throw new Error("TODO");
  }
}
