export interface AutoObservableOptions {
  exclude?: string[];
}

export type MakeAutoObservable = <T extends object>(
  target: T,
  options?: AutoObservableOptions,
) => T;

export interface IClassyArray<T> extends Iterable<T> {
  readonly length: number;
  readonly items: readonly T[];
  at(index: number): T | undefined;
  push(...items: T[]): number;
  pop(): T | undefined;
  shift(): T | undefined;
  unshift(...items: T[]): number;
  splice(start: number, deleteCount?: number, ...items: T[]): T[];
  clear(): void;
  [Symbol.iterator](): Iterator<T>;
}

export interface IClassyMap<K, V> extends Iterable<[K, V]> {
  readonly size: number;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
  delete(key: K): boolean;
  clear(): void;
  keys(): IterableIterator<K>;
  values(): IterableIterator<V>;
  entries(): IterableIterator<[K, V]>;
  [Symbol.iterator](): IterableIterator<[K, V]>;
}

export interface IClassySet<T> extends Iterable<T> {
  readonly size: number;
  has(value: T): boolean;
  add(value: T): this;
  delete(value: T): boolean;
  clear(): void;
  values(): IterableIterator<T>;
  [Symbol.iterator](): IterableIterator<T>;
}

export type EffectRunner = (fn: () => void | (() => void)) => () => void;
export type BatchRunner = (fn: () => void | (() => void)) => () => void;
