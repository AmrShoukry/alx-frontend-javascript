export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const newValue = weakMap.get(endpoint) + 1;
    if (newValue >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, newValue);
  } else {
    weakMap.set(endpoint, 1);
  }
  return weakMap;
}
