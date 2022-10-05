const { lonelyinteger } = require('./lonelyInteger');

describe('Lonely Integer', () => {
  it('Should pass the test', () => {
    const input = [1, 2, 3, 4, 3, 2, 1];
    const expected = 4;
    const result = lonelyinteger(input);
    expect(result).toBe(expected);
  });
});
