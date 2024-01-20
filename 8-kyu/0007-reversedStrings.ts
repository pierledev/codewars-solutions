/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// Solution 1
const solution = (str: string): string => str.split('').reverse().join('');

// Solution 2
const solution2 = (str: string): string => {
  let reversedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
};

// Solution 3
const solution3 = (str: string): string => [...str].reverse().join('');
