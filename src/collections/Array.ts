import { Signal } from "signal-polyfill";
import type { IClassyArray } from "../types.js";

/**
 * ClassyArray<T>
 *
 * TODO:
 * 1. Internen nativen Array-Speicher anlegen (z. B. #items: T[]).
 * 2. Versions-Signal anlegen (z. B. #version = new Signal.State(0)).
 * 3. Lesemethoden tracken lassen (#version.get()).
 * 4. Schreibmethoden mutieren und die Version hochzählen (#version.set(...)) aber nur wenn Reactive flag gesetzt.
 */
export class ClassyArray<T> implements IClassyArray<T> {
  #storage: T[];
  #version = new Signal.State(0);
  constructor(initialStorage: T[] = []) {
    this.#storage = initialStorage;
  }

  get length(): number {
    return this.#storage.length;
  }

  get items(): readonly T[] {
    throw new Error("TODO");
  }

  at(index: number): T | undefined {
    throw new Error("TODO");
  }

  push(...items: T[]): number {
    throw new Error("TODO");
  }

  pop(): T | undefined {
    throw new Error("TODO");
  }

  shift(): T | undefined {
    throw new Error("TODO");
  }

  unshift(...items: T[]): number {
    throw new Error("TODO");
  }

  splice(start: number, deleteCount?: number, ...items: T[]): T[] {
    throw new Error("TODO");
  }

  clear(): void {
    throw new Error("TODO");
  }

  // Könnte ich auch genereller machen
  stream(): void {
    throw new Error("TODO");
  }
  toArray() {
    return this.#storage;
  }
  setAll(newStorage: T[] = []) {
    this.#storage = newStorage;
    this.#version.set(this.#version.get() + 1);
  }

  [Symbol.iterator](): Iterator<T> {
    throw new Error("TODO");
  }
}
