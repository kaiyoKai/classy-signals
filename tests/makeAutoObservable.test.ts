import { Signal } from "signal-polyfill";

import { describe, it, expect, expectTypeOf } from "vite-plus/test";
import { makeAutoObservable } from "../src/observable.js";
import { AutoObservableOptions } from "../src/types.js";
it("should properly convert all the fields into signals", () => {
  class StoreTest {
    numField: number = 5;

    constructor() {
      makeAutoObservable(this);
    }
  }
  const store = new StoreTest();
  const doubleNum = new Signal.Computed(() => store.numField * 2);
  expect(store.numField).toBe(5);
  expect(doubleNum.get()).toBe(10);
  store.numField++;
  expect(store.numField).toBe(6);
  expect(doubleNum.get()).toBe(12);
});

it("get/accessor methods should be converted to computed signals", () => {
  class StoreTest {
    firstName: string;
    lastName: string;
    nameLookUps: number = 0;

    constructor(firstName: string, lastName: string, age: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      makeAutoObservable(this, {
        exclude: ["nameLookUps"],
      } satisfies AutoObservableOptions);
    }

    get fullName() {
      this.nameLookUps++;
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const store = new StoreTest("John", "Doe", 23);
  store.fullName;
  expect(store.nameLookUps).toBe(1);
  for (let i = 0; i < 10; i++) {
    store.fullName;
  }
  expect(store.nameLookUps).toBe(1);
  store.firstName = "Joanna";
  store.lastName = "DarkSouls";
  store.fullName;
  expect(store.nameLookUps).toBe(2);
});
it("should convert methods into actions that use batching for the signals", () => {});
