// Modified run-length encoding

const inputArr = [
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
      console.log([count, previous]);
      encoding.push([count, previous]);
      console.log(encoding);
      count = 1;
      previous = arr[i];
    } else {
      count++;
    }
  }
}
/**
 * Add a last pair
 */
// encoding.push(count, previous);
