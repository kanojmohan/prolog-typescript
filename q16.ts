// Drop every N'th element from a list.

const arry = ["k", "T", "h", "a", "i", "s"];

export function dropNthElement<T>(arr: T[], nth: number) {
  let exceptNth = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % nth != 0) {
      exceptNth.push(arr[i]);
    }
  }
  return exceptNth;
}
// console.log(dropNthElement(arry, 3));
