function getRotations(k) {
  let rotation = k;
  if (k === 26) return 0;
  if (k > 26) {
    while (rotation > 26) rotation = rotation - 26;
  }
  return rotation;
}

function alphabetChiper(alphabet, rotation) {
  const newAlphabet = alphabet.slice(rotation, alphabet.length);
  alphabet.forEach((letter, index) => {
    if (index < rotation) newAlphabet.push(letter);
  });
  return newAlphabet;
}

export function caesarCipher(s, k) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const rotation = getRotations(k);
  const newAlphabet = alphabetChiper(alphabet, rotation);
  const result = [];
  s.split('').forEach((item) => {
    const keyIndex = alphabet.findIndex(
      (letter) => letter.toUpperCase() === item.toUpperCase()
    );
    if (keyIndex === -1) {
      result.push(item);
    }
    if (/[a-z]/.test(item)) {
      result.push(newAlphabet[keyIndex]);
    }
    if (/[A-Z]/.test(item)) {
      result.push(newAlphabet[keyIndex].toUpperCase());
    }
  });
  return result.join('');
}
