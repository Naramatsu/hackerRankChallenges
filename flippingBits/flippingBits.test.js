const { flippingBits } = require('./flippingBits');

describe('Flipping Bits', () => {
  it('Should pass the test', () => {
    const input = 9;
    const expected = 4294967286;
    const result = flippingBits(input);
    expect(result).toBe(expected);
  });
});
