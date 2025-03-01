<p align="center">
  <img src="https://raw.githubusercontent.com/ofabiodev/tusk/main/.github/assets/icon.svg" alt="Tusk" width="200">
</p>

<h1><center>Tusk</center></h1>

<p align="center">
  <a href="https://www.npmjs.com/package/tusk" rel="noopener nofollow ugc">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/tusk?style=flat-square&labelColor=%23a56953&color=%23a56953">
  </a>
  <a href="https://www.npmjs.com/package/tusk" rel="noopener nofollow ugc">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dy/tusk?style=flat-square&labelColor=%23a56953&color=%23a56953">
  </a>
  <a href="https://github.com/ofabiodev/tusk" rel="noopener nofollow ugc">
    <img alt="Codecov" src="https://img.shields.io/codecov/c/github/ofabiodev/tusk?style=flat-square&labelColor=%23a56953&color=%23a56953">
  </a>
</p>

<p align="center"><a href="https://tusk.js.org"><b>👉 Read the Docs</b></a></p>

Ever felt frustrated with the limitations of modifying object behavior in JavaScript/TypeScript? Or maybe you're tired of writing repetitive code for debugging and testing? **Tusk** is here to solve these problems with its powerful and flexible runtime object manipulation tools!

> **⚙️ Getting Started**  
> To start using **Tusk**, simply install it via npm, yarn, or Bun. Then, you can begin extending objects or patching methods in seconds. **More on this later**.

Tusk allows you to temporarily modify existing methods while keeping the original behavior intact. It's perfect for debugging, testing, or enhancing functionality without touching the original codebase.

> **👀 Psst...**  
> With Tusk, you can even restore the original behavior of patched methods with a single command. It's **as easy as it gets**!

<h2><center>Monkey Patching</center></h2>

```ts
import { patch, unpatch } from "tusk";

const logger = {
  log: (msg: string) => console.log(msg),
};

patch(logger, "log", (original, msg) => {
  original(`[Tusk]: ${msg}`);
});

logger.log("This is a test"); // [Tusk]: This is a test

unpatch(logger, "log");
logger.log("This is a test"); // This is a test
```

Controlled Monkey Patching allows you to temporarily modify existing methods, with the ability to restore the original behavior at any time. This is perfect for debugging, testing, or adding runtime enhancements.

To patch a method, use `patch`. When you're done, simply call `unpatch` to revert to the original behavior. It's that easy!

> **💡 Good-To-Know**  
> Monkey Patching is powerful but should be used sparingly. Always document your patches to avoid confusion.

---

<h2><center>Installation 📦</center></h2>

To install Tusk, run one of the following commands:

```bash
# Using npm
npm install tusk

# Using pnpm
pnpm add tusk

# Using yarn
yarn add tusk

# Using Bun
bun add tusk
```

<h2><center>F.A.Q. 🤔</center></h2>

- **Can I use Tusk in production?**  
  Yes, but it's primarily designed for debugging, testing, and development.

- **Does Tusk work with async functions?**  
  Absolutely! Tusk supports both synchronous and asynchronous functions.

- **Is Tusk compatible with all JavaScript runtimes?**  
  Yes, Tusk works seamlessly with Node.js, Bun, and Deno.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/ofabiodev">ofabiodev</a>. Happy coding! 🚀
</p>