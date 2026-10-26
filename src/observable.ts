import type { MakeAutoObservable } from "./types.js";

/**
 * makeAutoObservable(target, options?)
 *
 * TODO :
 * 1. Prüfen, ob target.constructor[SCHEMA] bereits gecacht ist.
 * 2. Falls nicht: Felder auf target scannen und am Konstruktor cachen.
 * 3. Für jedes Feld: Property-Descriptor durch Getter/Setter ersetzen (enumerable: true!).
 * 4. Prototyp-Getter auf Object.getPrototypeOf(target) als Signal.Computed anbinden.
 */
export const makeAutoObservable: MakeAutoObservable = (target?, options?) => {
  throw new Error("TODO: Implementiere makeAutoObservable");
};
