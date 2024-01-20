/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

// Solution 1
const findSmallestInt = (args: number[]): number =>
  args.reduce((acc, curr) => (curr < acc ? curr : acc));

// Solution 2
const findSmallestInt2 = (args: number[]): number => Math.min(...args);
