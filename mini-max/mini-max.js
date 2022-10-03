export function miniMaxSum(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let minResult = 0;
  let maxResult = 0;
  arr.forEach((item) => {
    if (item > min) maxResult += item;
    if (item < max) minResult += item;
  });
  if (minResult === 0 && maxResult === 0) {
    minResult = min * 4;
    maxResult = max * 4;
  }
  console.log(`${minResult} ${maxResult}`);
}
