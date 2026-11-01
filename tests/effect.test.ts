import { Signal } from "signal-polyfill";
import { describe, it, expect } from "vite-plus/test";
import { effect } from "../src/effect.js";

it("should work", () => {
  let count = new Signal.State(0);

  const stop = effect(() => {
    console.log("Count ist:", count.get());
    return () => console.log("Cleanup vor nächstem Run");
  });
});
