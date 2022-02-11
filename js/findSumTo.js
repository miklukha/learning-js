/*
 * Write a function that returns the sum of numbers to n
 */

// The first solution - recursion
/*
function findSumTo(n) {
  if (n === 0) {
    return 0;
  }

  n += findSumTo(n - 1);
  return n;
} 
*/

// The second solution - the formula sum of an arithmetic progression (S(n) = n * (a(1) + a(n)) / 2), where a(1) = first term of arithmetic progression, n = number of terms in the arithmetic progression

function findSumTo(n) {
  return (n * (1 + n)) / 2;
}

console.log(findSumTo(4)); // 10
console.log(findSumTo(100)); // 5050
