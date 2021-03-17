// Reverse a list.

let num = [1, 2, 3, 5, 6, 7, 8, 9];

const juices = [
  "banana",
  "apple",
  "oranges",
  "pineapple",
  "jackfruit",
  "chikku",
];

export function reverseList<T>(input: T[]) {
  const reverse = [];
  for (let i = input.length - 1; i >= 0; i--) {
    reverse.push(input[i]);
  }
  return reverse;
}
// console.log(reverseList(num));
