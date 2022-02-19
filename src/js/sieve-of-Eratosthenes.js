/*
 * Write a function that returns an array of all prime numbers to a certain number
 * For example,
 * 9 -> [2, 3, 5, 7]
 * 3 -> [2, 3]
 */

// First solution

// function isPrime(num) {
//   for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// function getPrimes(num) {
//   const array = [];

//   for (let i = 2; i <= num; i += 1) {
//     if (isPrime(i)) {
//       array.push(i);
//     }
//   }

//   return array;
// }

// Second solution (sieve of Eratosthenes)

function getPrimes(num) {
  const seive = [];
  const primes = [];

  for (let i = 2; i <= num; i += 1) {
    if (!seive[i]) {
      primes.push(i);
      for (let j = i * i; j <= num; j += i) {
        seive[j] = true;
      }
    }
  }

  return primes;
}

console.log(getPrimes(9)); // [2, 3, 5, 7]
console.log(getPrimes(3)); // [2, 3]
console.log(getPrimes(120)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113]
