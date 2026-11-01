import { Signal } from "signal-polyfill";
import { describe, it, expect, expectTypeOf } from "vite-plus/test";

import { makeAutoObservable } from "../src/observable.js";
it("should work", () => {
  class StoreTest {
    numField: number = 0;
    stringField: string = "";
    signalNumField = new Signal.State(0);

    constructor() {
      makeAutoObservable(this);
    }
  }
  //I should iterate through a class's members/field automatically in the future
  const store = new StoreTest();
  expect(store.numField).toBeInstanceOf(Signal.State);
  expect(store.signalNumField).toBeInstanceOf(Signal.State);
  expect(store.stringField).toBeInstanceOf(Signal.State);
});
