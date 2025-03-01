import { extensionRegistry, patchRegistry } from "./registry.js";

/**
 * Unpatches a method, restoring the original method to the object.
 * 
 * @param target — The target object containing the method.
 * @param method — The method to be unpatched.
 */
export function unpatch<T extends object, K extends keyof T>(target: T, method: K): void {
  const patchedEntry = patchRegistry.get(target)?.get(method as string);
  const extendedEntry = extensionRegistry.get(target)?.get(method as string);
  
  if (patchedEntry) {
    Object.defineProperty(target, method, {
      value: patchedEntry.originalMethod,
      configurable: true,
      writable: true,
    });
    patchRegistry.get(target)!.delete(method as string);
  } else if (extendedEntry) {
    extensionRegistry.get(target)!.delete(method as string);
  } else {
    throw new TypeError(`Method ${String(method)} was not patched or extended.`);
  }
}
