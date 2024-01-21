/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

// Solution 1
const grow = (arr: number[]): number =>
  arr.reduce((acc, curr) => acc * curr, 1);

// Solution 2
const grow2 = (arr: number[]): number => {
  let result = 1;

  for (const num of arr) result *= num;

  return result;
};
