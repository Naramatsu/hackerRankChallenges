export function diagonalDifference(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  arr.forEach((row, index) => {
    leftDiagonal += row[index];
    rightDiagonal += row[row.length - 1 - index];
  });
  return Math.abs(leftDiagonal - rightDiagonal);
}
