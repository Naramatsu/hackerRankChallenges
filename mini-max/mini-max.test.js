const { miniMaxSum } = require('./mini-max');

describe('Mini-Max', () => {
  const logSpy = jest.spyOn(console, 'log');
  it('Should pass the test', () => {
    const input = [1, 2, 3, 4, 5];
    const result = '10 14';
    miniMaxSum(input);
    expect(logSpy).toHaveBeenCalledWith(result);
  });

  it('Should pass the test with all item value = 5', () => {
    const input = [5, 5, 5, 5, 5];
    const result = '20 20';
    miniMaxSum(input);
    expect(logSpy).toHaveBeenCalledWith(result);
  });
});
