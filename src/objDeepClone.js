export function objDeepClone(input) {
  let result = Array.isArray(input) ? [] : {};

  if (typeof input !== 'object') {
    return input;
  }

  for (let key in input) {
    result[key] = objDeepClone(input[key]);
  }
  return result;
}
