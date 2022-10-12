export function sockMerchant(n, ar) {
  const pairs = {};
  for (let i = 0; i < n; i++) {
    let sum = ar.filter((item) => item === ar[i]).length;
    if (!pairs[ar[i]]) {
      pairs[ar[i]] = Math.trunc(sum / 2);
    }
  }
  return Object.values(pairs).reduce((total, current) => total + current);
}
