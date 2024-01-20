/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"
*/

// Solution 1
const findNeedle = (haystack: any[]): string => {
  const needleIndex = haystack.findIndex((el) => el === 'needle');

  return needleIndex !== -1
    ? `found the needle at position ${needleIndex}`
    : 'needle not found';
};

// Solution 2
const findNeedle2 = (haystack: any[]): string =>
  `found the needle at position ${haystack.indexOf('needle')}`;
