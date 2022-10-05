export function lonelyinteger(a) {
  const result = {};
  a.forEach((item) => {
    if (result[item]) {
      result[item] = result[item] + 1;
    } else {
      result[item] = 1;
    }
  });
  return parseInt(Object.keys(result).find((item) => result[item] === 1));
}
