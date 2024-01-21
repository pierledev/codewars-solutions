/*
Write function bmi that calculates body mass index (bmi = weight / height ** 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

// Solution 1
const bmi = (weight: number, height: number): string => {
  const bmiResult = weight / Math.pow(height, 2);

  if (bmiResult <= 18.5) return 'Underweight';
  if (bmiResult <= 25.0) return 'Normal';
  if (bmiResult <= 30.0) return 'Overweight';

  return 'Obese';
};

// Solution 2
const bmi2 = (weight: number, height: number): string => {
  const bmiResult = weight / Math.pow(height, 2);

  return bmiResult <= 18.5
    ? 'Underweight'
    : bmiResult <= 25.0
    ? 'Normal'
    : bmiResult <= 30.0
    ? 'Overweight'
    : 'Obese';
};
