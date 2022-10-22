const { caesarCipher } = require('./caesarCipher');

describe('Caesar Cipher', () => {
  it('Should pass the test', () => {
    const input = {
      s: 'middle-Outz',
      k: 2,
    };
    const expected = 'okffng-Qwvb';
    const result = caesarCipher(input.s, input.k);
    expect(result).toBe(expected);
  });
});
