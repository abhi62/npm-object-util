export function memo(fun) {
  const catche = {};
  return function (...args) {
    if (catche[args]) {
      return catche[args];
    }
    const result = fun(...args);
    catche[args] = result;
    return result;
  };
}
