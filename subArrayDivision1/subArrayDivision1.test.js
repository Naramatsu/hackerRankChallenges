const { birthday } = require('./subArrayDivision1');

describe('Sub Array Divisional 1', () => {
  it('Should pass the test', () => {
    const input = {
      s: [2, 2, 1, 3, 2],
      d: 4,
      m: 2,
    };
    const expected = 2;
    const result = birthday(input.s, input.d, input.m);
    expect(result).toBe(expected);
  });
});
