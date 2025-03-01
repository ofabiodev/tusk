import { validate } from "../utils/validate.js";
import { patchRegistry } from "./registry.js";

type AnyFunction = (...args: any[]) => any;

type PatchFunction<T, K extends keyof T> = (
  this: T,
  original: T[K] extends AnyFunction ? T[K] : never,
  ...args: Parameters<T[K] extends AnyFunction ? T[K] : never>
) => ReturnType<T[K] extends AnyFunction ? T[K] : never>;

/**
 * Patches a method of an object by replacing it with a new implementation while preserving the original functionality.
 * 
 * @param target - The object containing the method to be patched
 * @param method - The name of the method to patch
 * @param patchFn - The new implementation that will replace the original method. Receives the original method as first parameter.
 * @throws {TypeError} If the method doesn't exist or is already patched
 */
export function patch<T extends object, K extends keyof T>(
  target: T,
  method: K,
  patchFn: PatchFunction<T, K>
): void {
  validate(target, method, patchFn);

  const existingMethod = target[method];

  if (typeof existingMethod !== "function") {
    throw new TypeError(`${String(method)} is not a function.`);
  }

  if (patchRegistry.has(target) && patchRegistry.get(target)!.has(method as string)) {
    throw new TypeError(`Method ${String(method)} is already patched.`);
  }

  if (!patchRegistry.has(target)) {
    patchRegistry.set(target, new Map());
  }

  patchRegistry.get(target)!.set(method as string, {
    target,
    methodName: method,
    originalMethod: existingMethod,
    implementation: function (this: T, ...args: Parameters<T[K] extends AnyFunction ? T[K] : never>) {
      return patchFn.call(this, existingMethod as T[K] extends AnyFunction ? T[K] : never, ...args);
    },
  });

  Object.defineProperty(target, method, {
    value: patchRegistry.get(target)!.get(method as string)!.implementation,
    configurable: true,
    writable: true,
  });
}
