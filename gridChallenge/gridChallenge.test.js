const { gridChallenge } = require('./gridChallenge');

describe('Grid Challenge', () => {
  it('Should pass the test with YES', () => {
    const input = ['abc', 'lmp', 'qrt'];
    const expected = 'YES';
    const result = gridChallenge(input);
    expect(result).toBe(expected);
  });

  it('Should pass the test with NO', () => {
    const input = ['mpxz', 'abcd', 'wlmf'];
    const expected = 'NO';
    const result = gridChallenge(input);
    expect(result).toBe(expected);
  });
});
