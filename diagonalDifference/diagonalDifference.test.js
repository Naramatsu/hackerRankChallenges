const { diagonalDifference } = require('./diagonalDifference');

describe('Diagonal Difference', () => {
  it('Should pass the test', () => {
    const input = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ];
    const expected = 15;
    const result = diagonalDifference(input);
    expect(result).toBe(expected);
  });
});
