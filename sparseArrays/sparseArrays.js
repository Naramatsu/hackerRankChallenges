export function matchingStrings(strings, queries) {
  const result = [];
  queries.forEach((query) => {
    let sumatory = 0;
    strings.forEach((str) => {
      if (query === str) sumatory += 1;
    });
    result.push(sumatory);
  });
  return result;
}
