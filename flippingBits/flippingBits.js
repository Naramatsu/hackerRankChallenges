export function flippingBits(n) {
  const inputBinary = n.toString(2).split('').reverse();
  const binary32 = [];
  const result = [];
  for (let i = 0; i <= 31; i++) {
    if (i < inputBinary.length) {
      binary32.push(inputBinary[i]);
    } else {
      binary32.push(0);
    }
  }

  binary32.forEach((item) => {
    if (parseInt(item) === 0) result.push(1);
    if (parseInt(item) === 1) result.push(0);
  });

  return parseInt(result.slice(0).reverse().join(''), 2);
}
