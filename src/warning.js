/** @alias console.warn */
export function warning(...args) {
  if (globalThis.__ClConfig__.disableWarning) return;
  console.warn('@cmtlyt/base:>', ...args);
}
