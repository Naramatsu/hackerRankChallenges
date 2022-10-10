export function birthday(s, d, m) {
  let solutions = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;
    for (let x = 0; x < m; x++) {
      sum += s[i + x];
    }
    if (sum === d) {
      solutions++;
    }
  }
  return solutions;
}
