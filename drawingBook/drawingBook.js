export function pageCount(n, p) {
  let counterAsc = 0;
  let counterDesc = 0;
  const validator = p % 2 === 0 ? [p, p + 1] : [p, p - 1];
  for (let i = 1; i < p; i += 2) {
    if (validator.includes(i)) {
      break;
    } else {
      counterAsc++;
    }
  }
  for (let i = n; i > 1; i = i - 2) {
    if (validator.includes(i)) {
      break;
    } else {
      counterDesc++;
    }
  }
  return Math.min(counterAsc, counterDesc);
}
