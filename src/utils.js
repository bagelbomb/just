/**
 * Checks if a value is a React prop object, defined here as a non-null, non-array object that's also not a React element.
 * @param {any} value - The value to check.
 * @returns {boolean} true if the value is a React prop object; false otherwise.
 */
export function isProp(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    !value.$$typeof // React elements have a $$typeof property
  );
}
