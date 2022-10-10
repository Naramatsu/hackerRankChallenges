const { twoArrays } = require('./permutingTwoArrays');

describe('Permuting Two Arrays', () => {
  const input = {
    A: [2, 1, 3],
    B: [7, 8, 9],
    k: 10,
  };

  it('Should pass the test with "YES"', () => {
    const expected = 'YES';
    const result = twoArrays(input.k, input.A, input.B);
    expect(result).toBe(expected);
  });

  it('Should pass the test with "NO"', () => {
    input.k = 5;
    input.A = [1, 2, 2, 1];
    input.B = [3, 3, 3, 4];
    const expected = 'NO';
    const result = twoArrays(input.k, input.A, input.B);
    expect(result).toBe(expected);
  });
});
