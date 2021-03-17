// Run-length encoding of a list.

const inputArrr = [
  "a",
  "a",
  "a",
  "a",
  "b",
  "c",
  "c",
  "a",
  "a",
  "d",
  "e",
  "e",
  "e",
  "e",
];

export function encode<T>(arr: T[]) {
  let encoding = [];
  let previous = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== previous) {
      encoding.push([count, previous]);
      count = 1;
      previous = arr[i];
    } else {
      count++;
    }
  }
  /**
   * Add a last pair
   */
  encoding.push(count, previous);

  return encoding;
}
//   console.log(encode(inputArr));

// module.exports = { encode };
