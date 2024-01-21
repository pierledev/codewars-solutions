/*
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

const getGrade = (a: number, b: number, c: number): string => {
  const averageGrade = (a + b + c) / 3;

  switch (true) {
    case averageGrade >= 90:
      return 'A';
    case averageGrade >= 80:
      return 'B';
    case averageGrade >= 70:
      return 'C';
    case averageGrade >= 60:
      return 'D';
    default:
      return 'F';
  }
};
