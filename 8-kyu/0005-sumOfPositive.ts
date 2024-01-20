/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

// Solution 1
const positiveSum = (arr: number[]): number => {
  if (arr.length === 0) return 0;

  let output = 0;

  for (const num of arr) {
    output += num < 0 ? 0 : num;
  }

  return output;
};

// Solution 2
const positiveSum2 = (arr: number[]): number =>
  arr.reduce((acc, curr) => acc + (curr < 0 ? 0 : curr), 0);
