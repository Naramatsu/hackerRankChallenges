const { pangrams } = require('./pangrams');

describe('Pangrams Challenge', () => {
  it('Should pass the test with a pangram', () => {
    const input = 'We promptly judged antique ivory buckles for the next prize';
    const expected = 'pangram';
    const result = pangrams(input);
    expect(result).toBe(expected);
  });

  it('Should pass the test with a not pangram', () => {
    const input = 'We promptly judged antique ivory buckles for the prize';
    const expected = 'not pangram';
    const result = pangrams(input);
    expect(result).toBe(expected);
  });
});
