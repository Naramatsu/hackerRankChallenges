const { plusMinus } = require('./plusMinus');

describe('plusMinus', () => {
  it('Should pass the test', () => {
    const logSpy = jest.spyOn(console, 'log');
    const input = [1, 1, -1, 0];
    const result = {
      positives: '0.500000',
      negatives: '0.250000',
      zeros: '0.250000',
    };
    plusMinus(input);
    expect(logSpy).toHaveBeenCalledWith(result.positives);
    expect(logSpy).toHaveBeenCalledWith(result.negatives);
    expect(logSpy).toHaveBeenCalledWith(result.zeros);
  });
});
