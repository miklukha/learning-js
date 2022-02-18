/*
 * Write a function that gets two integers a and b, which can be positive or negative, and returns the sum of all the integers between and including them.
 * If the two numbers are equal return a or b.
 */

function getSum(a, b) {
  let sum = 0;
  let smallerNumber = a;
  let biggerNumber = b;

  if (a === b) {
    return a;
  }

  if (b < a) {
    smallerNumber = b;
    biggerNumber = a;
  }

  while (smallerNumber <= biggerNumber) {
    sum += smallerNumber;
    smallerNumber += 1;
  }

  return sum;
}

console.log(getSum(281, -60)); // 37791
console.log(getSum(-60, -60)); // -60
console.log(getSum(20, 40)); // 630
