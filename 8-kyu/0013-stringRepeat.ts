/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// Solution 1
const repeatStr = (n: number, s: string): string => s.repeat(n);

// Solution 2
const repeatStr2 = (n: number, s: string): string =>
  Array.from({ length: n }, (x) => s).join('');
