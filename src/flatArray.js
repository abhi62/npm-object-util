export function flatArray(input) {
  let result = [];
  if (!Array.isArray(input)) {
    return input;
  }
  for (let data of input) {
    result = result.concat(flatArray(data));
  }
  return result;
}
