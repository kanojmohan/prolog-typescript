// /palindrome

export function palindromeArray<T>(arr: T[]) {
  let isPalindrome = true;

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}
//   console.log(palindromeArray([1, 2, 2, 1]));
