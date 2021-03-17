const juic = ["banana", "apple", "oranges", "pineapple", "jackfruit", "chikku"];
const test: number[] = [1, 2, 3, 4, 6];
// let count = juice.length;
// console.log(count);
export function numberOfElement<T>(input: T[]): number {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    count++;
  }

  return count;
}
// console.log(numberOfElement(juice));
// console.log(numberOfElement(test));
