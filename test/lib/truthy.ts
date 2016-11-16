export function truthy<T>(value: T | undefined): T {
  if (value) {
    return value;
  } else {
    throw new Error('value should be truty');
  }
}