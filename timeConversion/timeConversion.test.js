const { timeConversion } = require('./timeConversion');

describe('timeConversion', () => {
  describe('When the time is in AM', () => {
    it('Should pass the test', () => {
      const input = '07:05:45AM';
      const expected = '07:05:45';
      const result = timeConversion(input);
      expect(result).toBe(expected);
    });

    it('Should pass the test when it is 12', () => {
      const input = '12:05:45AM';
      const expected = '00:05:45';
      const result = timeConversion(input);
      expect(result).toBe(expected);
    });
  });

  describe('When the time is in PM', () => {
    it('Should pass the test', () => {
      const input = '07:05:45PM';
      const expected = '19:05:45';
      const result = timeConversion(input);
      expect(result).toBe(expected);
    });

    it('Should pass the test when it is 12', () => {
      const input = '12:05:45PM';
      const expected = '12:05:45';
      const result = timeConversion(input);
      expect(result).toBe(expected);
    });
  });
});
