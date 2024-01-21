/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

const countSheep = (num: number): string =>
  Array.from({ length: num }, (x, i) => `${i + 1} sheep...`).join('');
