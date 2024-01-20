/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

// Solution 1
const countSheeps = (arrOfSheep: (boolean | undefined | null)[]): number =>
  arrOfSheep.filter((el) => el).length;

// Solution 2
const countSheeps2 = (arrOfSheep: (boolean | undefined | null)[]): number => arrOfSheep.filter(Boolean).length;