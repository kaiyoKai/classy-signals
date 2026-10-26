import type { IClassySet } from "../types.js";

/**
 * ClassySet<T>
 *
 *  TODO:
 * 1. Internen Set-Speicher anlegen (z. B. #set: Set<T>).
 * 2. Versions-Signal für Mutationen anlegen.
 * 3. has(), size und Iteration reaktiv anbinden.
 */
export class ClassySet<T> implements IClassySet<T> {
  constructor(values?: readonly T[] | null) {
    // TODO: Initialisieren
  }

  get size(): number {
    throw new Error("TODO");
  }

  has(value: T): boolean {
    throw new Error("TODO");
  }

  add(value: T): this {
    throw new Error("TODO");
  }

  delete(value: T): boolean {
    throw new Error("TODO");
  }

  clear(): void {
    throw new Error("TODO");
  }

  values(): IterableIterator<T> {
    throw new Error("TODO");
  }

  [Symbol.iterator](): IterableIterator<T> {
    throw new Error("TODO");
  }
}
