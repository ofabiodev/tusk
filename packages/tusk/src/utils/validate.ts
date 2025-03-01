export function validate<T extends object, K extends keyof T>(
  target: T,
  method: K,
  patchFn: Function
): void {
  if (!target || typeof target !== "object") {
    throw new TypeError("Target must be a non-null object.");
  }
  if (!method || typeof method !== "string") {
    throw new TypeError("Method must be a valid string.");
  }
  if (typeof patchFn !== "function") {
    throw new TypeError("Patch function must be a function.");
  }
}