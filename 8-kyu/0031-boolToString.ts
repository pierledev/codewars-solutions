/*
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

// Solution 1
const booleanToString = (b: boolean): string => (b ? 'true' : 'false');

// Solution 2
const booleanToString2 = (b: boolean): string => String(b);
