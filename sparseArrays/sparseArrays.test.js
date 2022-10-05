const { matchingStrings } = require('./sparseArrays');

describe('Sparse Arrays', () => {
  it('Should pass the test', () => {
    const strings = ['ab', 'ab', 'abc'];
    const queries = ['ab', 'abc', 'bc'];
    const expected = [2, 1, 0];
    const result = matchingStrings(strings, queries);
    expect(result).toEqual(expected);
  });
});
