interface PatchEntry<T, K extends keyof T> {
  target: T;
  methodName: K;
  originalMethod?: T[K];
  implementation: (this: T, ...args: any[]) => any;
}

export const extensionRegistry = new WeakMap<object, Map<string, PatchEntry<any, any>>>();
export const patchRegistry = new WeakMap<object, Map<string, PatchEntry<any, any>>>();