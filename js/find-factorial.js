/*
 * Write a function that returns the factorial of number
 */

function findFactorial(num) {
  if (num === 1) {
    return 1;
  }

  num *= findFactorial(num - 1);
  return num;
}

console.log(findFactorial(3)); // 6
console.log(findFactorial(8)); // 40320
console.log(findFactorial(10)); // 3628800
console.log(findFactorial(20)); // 2432902008176640000
console.log(findFactorial(30)); // 2.6525285981219103e+32
