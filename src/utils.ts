import type { EffectRunner } from "./types.js";
import type { BatchRunner } from "./types.js";

/**
 *
 * TODO:
 * 1. Signal.subtle.Watcher instanziieren.
 * 2. Callback ausführen und über watcher.watch(...) überwachen.
 * 3. Bei Änderungen über queueMicrotask aufwachen und ausführen.
 * 4. Cleanup-Funktion zurückgeben (watcher.unwatch).
 */
export const effect: EffectRunner = (fn) => {
  throw new Error("TODO: Implementiere effect");
};
/**
 *
 * TODO:
 * 1. Signal.subtle.Watcher instanziieren.
 * 2. Benachrichtigung abfangen aber nicht signal überschreiben
 * 3. Inner batches zu erst (irgendwie?) also sollte ich eine batchdepth vlt. runterzählen
 * 4. Gesammelte Updates sofort hoffenlich synchor ausführen
 */

export const batch = (fn) => {
  throw new Error("TODO: Implementiere batching");
};
