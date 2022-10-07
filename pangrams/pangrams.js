export function pangrams(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  const result = {};
  for (let i = 0; i < alphabet.length; i++) {
    result[alphabet[i]] = s
      .split('')
      .filter((item) => alphabet[i] === item.toUpperCase()).length;
  }
  return Object.values(result).some((item) => item === 0)
    ? 'not pangram'
    : 'pangram';
}
