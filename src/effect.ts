import { Signal } from "signal-polyfill";
import type { EffectRunner } from "./types.js";

/**
 * effect(fn)
 *
 * TODO:
 * 1. Signal.subtle.Watcher instanziieren.
 * 2. Callback ausführen und über watcher.watch(...) überwachen.
 * 3. Bei Änderungen über queueMicrotask aufwachen und ausführen.
 * 4. Cleanup-Funktion zurückgeben (watcher.unwatch).
 */
export const effect: EffectRunner = (fn) => {
  const watcher = new Signal.subtle.Watcher(() => {
    fn();

    queueMicrotask(fn);
  });
  throw new Error("TODO: Implementiere effect");
};
