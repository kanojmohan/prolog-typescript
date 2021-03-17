// Extract a given number of randomly selected elements from a list

const arrrr = ["a", "b", "c", "d", "e", "f", "g", "h"];

export function selectRandom<T>(arr: T[], numberOfElement: number) {
  let extracted = [];
  for (let i = 0; i < numberOfElement; i++) {
    extracted.push(arr[Math.floor(Math.random() * arr.length)]);
  }

  //   return Math.floor(Math.random() * arr.length);
  return extracted;
}
// console.log(selectRandom(arrrr, 4));

// module.exports = { selectRandom };
