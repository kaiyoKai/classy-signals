# Classy-Signals

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TC39 Signals](https://img.shields.io/badge/TC39-Signals%20Proposal-orange.svg)](https://github.com/tc39/proposal-signals)
[![Dependencies](https://img.shields.io/badge/signal--polyfill-^0.2.2-green.svg)](https://www.npmjs.com/package/signal-polyfill)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

A german computer-science students attempt at a utility library for the Signal Polyfill, designed around the TC39 Stage 1 Proposal (as of October 2026) to support the integration of native, standardized signals into JavaScript.

## ⛷️ Inspirations ⛷️:

* MobX's observable/reactive store model
* @Signal-Utils subtle utilities

## Key priorities of the library:

1. **Full compatibility with `@lit-labs/signals`** as a lightweight alternative to `@adobe/lit-mobx`
2. **Minimizing the use of Proxies** to prioritize performance and predictable behavior over API invisibility
3. **Making a Class-based store approach feel less boilerplatey** and leaning into the strengths of standard JS-Classes

---

## The `reactive` Flag & Zero-Proxy Architecture

Unlike Proxies that trap every single property access at runtime, `classy-signals` collections (`ClassyArray`, `ClassyTypedArray`, etc.) are decoupled from the
signal graph by default:

* **`reactive = false` (Default):** Collections behave like fast native data structures with zero signal overhead during setup, bulk imports, or isolated algorithms.
* **Opt-In Reactivity:** Can be enabled directly via constructor `{ reactive: true }` or dynamically via `.setReactive(true)`.
* **Automatic Store Promotion:** When passed into a class managed by `makeAutoObservable(this)`, the engine inspects the fields and automatically switches any attached Classy collection to `reactive = true`.
* **Versioned Tracking:** Mutations just increment an internal `#version` signal (`Signal.State`), ensuring dependency notification without proxy overhead.

---

## Example: Store with `ClassyTypedArray` & Lit Component

A store managing a compact binary bitfield (e.g. for grid cells, game states, or hardware flags) rendered efficiently via a `@lit-labs/signals` Web Component:

```typescript
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { SignalWatcher } from "@lit-labs/signals";
import { makeAutoObservable, ClassyTypedArray } from "classy-signals";
import { Signal } from "signal-polyfill";

// 1. Reactive Class Store
class GameBitmaskStore {
  // Uint8Array wrapping 8-bit board/cell flags
  // Starts not reactive,is automatically set to reactive by makeAutoObservable!
  readonly flags = new ClassyTypedArray(new Uint8Array([0b00000001, 0b00000010]));

  constructor() {
    makeAutoObservable(this); // Automatically activates reactive = true on this.flags
  }

  // Computed signal: checks if active flag bit is set
  get hasActiveFlag() {
    return (this.flags.at(0) & 0b10000000) !== 0;
  }

  toggleFlag(byteIndex: number, bitmask: number) {
    const current = this.flags.at(byteIndex) ?? 0;
    this.flags.set(byteIndex, current ^ bitmask); // Bumps version signal, triggers watchers
  }
}

export const store = new GameBitmaskStore();

// 2. Lit Component using SignalWatcher
@customElement("bitmask-viewer")
export class BitmaskViewer extends SignalWatcher(LitElement) {
  render() {
    return html`
      <div>
        <h3>Bitmask Status: ${store.hasActiveFlag ? "🔴 ACTIVE" : "🟢 IDLE"}</h3>

        <button @click=${() => store.toggleFlag(0, 0b10000000)}>
          Toggle Bit 7 (0b10000000)
        </button>
      </div>
    `;
  }
}
```

---

## Planned Features:

* **Reactive Primitives & Utilities:** `effect()`, `batch()` and maybe asynchronous variations.
* **Class Store Engine:** `makeAutoObservable()` (MobX feeling without proxy magic)
* **Classy Collections:**
  * `ClassyArray`
  * `ClassyMap`
  * `ClassySet`
  * `ClassyTypedArray<Uint8Array | ...>`

* Utilty methods for Classy Collections , Making them feel a lot more "worth it" to use.

---

## Contributing

Contributions, feedback, and discussions are very welcome!
However, as this repository is primarily a students exploratory learning project around the TC39 Signals proposal and reactive patterns:
**please do not submit fully AI-generated pull requests**.

Handwritten code, thoughtful issues, and genuine architectural discussions are always appreciated.

---

## Development

```bash
pnpm install
pnpm test
pnpm build
```


⛷️ Is my Favorite Emoji of all time

**License:** MIT
**Author:** Kai K ([@kaiyoKai](https://github.com/kaiyoKai))
