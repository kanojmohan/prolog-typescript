const arrey = ["k", "T", "h", "a", "i", "s"];

export function dropNthElements<T>(arr: T[], nth: number) {
  let exceptNth = [];
  for (let i = 0; i < arr.length; i++) {
    if (i != nth) {
      exceptNth.push(arr[i]);
    }
  }
  return exceptNth;
}
// console.log(dropNthElement(arrey, 3));
