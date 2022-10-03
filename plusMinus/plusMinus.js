export function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  const size = arr.length;

  arr.forEach((item) => {
    if (item === 0) {
      zeros += 1;
    } else if (item < 0) {
      negatives += 1;
    } else {
      positives += 1;
    }
  });
  positives = (positives / size).toFixed(6);
  negatives = (negatives / size).toFixed(6);
  zeros = (zeros / size).toFixed(6);
  console.log(positives);
  console.log(negatives);
  console.log(zeros);
}
