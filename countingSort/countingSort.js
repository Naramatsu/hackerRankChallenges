export function countingSort(arr) {
  const arrSorted = arr.sort((a, b) => a - b);
  const result = {};
  for (let i = 0; i < 100; i++) {
    result[i] = arrSorted.filter((item) => item === i).length;
  }
  return Object.values(result).map((item) => parseInt(item));
}
