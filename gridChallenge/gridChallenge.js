export function gridChallenge(grid) {
  const gridGrouped = {};
  const result = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (gridGrouped[j]) {
        gridGrouped[j] = [...gridGrouped[j], grid[i][j]];
      } else {
        gridGrouped[j] = [grid[i][j]];
      }
    }
  }
  Object.values(gridGrouped).forEach((items) => {
    const temp = items.slice(0);
    temp.sort();
    result.push(items.join('') === temp.join(''));
  });
  return result.some((item) => item === false) ? 'NO' : 'YES';
}
