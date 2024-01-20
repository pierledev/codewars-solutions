/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9.
*/

// Solution 1
const squareSum = (numbers: number[]): number => numbers.reduce((acc, curr) => acc + (curr ** 2), 0);

// Solution 2
const squareSum2 = (numbers: number[]): number => numbers.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);