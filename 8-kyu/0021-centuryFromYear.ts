/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
Note: this kata uses strict construction as shown in the description and the examples
*/

// Solution 1
const centuryFromYear = (year: number): number =>
  !Number.isInteger(year / 100) ? Math.ceil(year / 100) : year / 100;

// Solution 2
const centuryFromYear2 = (year: number): number => Math.ceil(year/100);