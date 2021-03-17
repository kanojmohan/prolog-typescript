// // Insert an element at a given position into a list.
import { splitTheList } from "./q17";

const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

export function insert<T>(inputArr: T[], nthPlace: number, value: string) {
  const temp = splitTheList(inputArr, nthPlace);
  return [...temp.firstpart, value, ...temp.secondPart];
}
// console.log(insert(arr, 3, "z"));
// console.log(insert(arr, 2, "o"));
