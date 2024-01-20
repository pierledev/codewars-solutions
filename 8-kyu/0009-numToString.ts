/*
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

// Solution 1
const numberToString = (num: number): string => `${num}`;

// Solution 2
const numberToString2 = (num: number): string => num.toString();

// Solution 3
const numberToString3 = (num: number): string => String(num);

// Solution 4
const numberToString4 = String;