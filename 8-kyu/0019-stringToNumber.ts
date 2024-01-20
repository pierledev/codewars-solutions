/*
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

// Solution 1
const stringToNumber = (str: string): number => Number(str);

// Solution 2
const stringToNumber2 = (str: string): number => +str;

// Solution 3
const stringToNumber3 = parseInt;