const { pageCount } = require('./drawingBook');

describe('Drawing Book', () => {
  it('Should pass the test', () => {
    const input = {
      n: 6,
      p: 2,
    };
    const expected = 1;
    const result = pageCount(input.n, input.p);
    expect(result).toBe(expected);
  });
});
