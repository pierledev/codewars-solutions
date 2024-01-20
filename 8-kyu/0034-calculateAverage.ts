/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// Solution 1
const findAverage = (array: number[]): number => {
  const numOfNums = array.length;

  if (numOfNums === 0) return 0;

  let total = 0;

  for (const num of array) {
    total += num;
  }

  const average = total / numOfNums;

  return average;
};

// Solution 2
const findAverage2 = (array: number[]): number =>
  array.length === 0
    ? 0
    : array.reduce((acc, curr) => acc + curr, 0) / array.length;
