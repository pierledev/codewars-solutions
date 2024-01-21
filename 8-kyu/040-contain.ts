/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

// Solution 1
const check = (a: (number | string)[], x: number | string): boolean =>
  !!a.filter((el) => el === x).length;

// Solution 2
const check2 = (a: (number | string)[], x: number | string): boolean =>
  a.includes(x);

// Solution 3
const check3 = (a: (number | string)[], x: number | string): boolean =>
  a.indexOf(x) !== -1;
