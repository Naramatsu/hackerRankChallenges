const { sockMerchant } = require('./salesByMatch');

describe('Sales By Match', () => {
  it('Should pass the test', () => {
    const input = {
      n: 9,
      ar: [10, 20, 20, 10, 10, 30, 50, 10, 20],
    };
    const expected = 3;
    const result = sockMerchant(input.n, input.ar);
    expect(result).toBe(expected);
  });
});
