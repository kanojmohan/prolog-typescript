// Find the K'th element of a list.

const list = [1, 1, 2, 3, 5, 8];
const juice = [
  "banana",
  "apple",
  "oranges",
  "pineapple",
  "jackfruit",
  "chikku",
];
// const kth = 4;
// console.log(list[kth]);
export function kthElement<T>(input: T[], kth: number) {
  for (let i = 0; i < input.length; i++) {
    // console.log(i);
    if (i === kth - 1) {
      // console.log(i, kth);
      return input[i];
    }
  }
}

// console.log(kthElement(juice, 3));
