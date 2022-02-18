/*
 * Write a function that calculates body mass index
 * The function gets weight and height as string
 * Numbers can be written as 24.7 or 24,7
 * The function returns a rounded index with one digit after a comma
 */

function calculateBodyMassIndex(weight, height) {
  weight = Number.parseFloat(weight.replace(',', '.'));
  height = Number.parseFloat(height.replace(',', '.'));

  const bmi = (weight / height ** 2).toFixed(1);
  return bmi;
}

console.log(calculateBodyMassIndex('88,3', '1.75')); // '28.8'
console.log(calculateBodyMassIndex('60', '1.69')); // 21.0
