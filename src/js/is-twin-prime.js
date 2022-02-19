/*
 * Write an isTwinPrime function that returns true if:
 * 1. number is a prime number (prime numbers are special numbers greater than 1, which have exactly two factors, themselves and 1)
 * 2. number + 2 or number - 2 - at least one of these results is a prime number
 * If at least one of these conditions isn't performed, returns false
 *
 * For example, take 7
 * 1. 7 is prime number
 * 2. 7 + 2 = 9, 7 - 2 = 5; 5 is prime number
 * Answer: true
 */

const isTwinPrime = number => {
  if (isPrime(number)) {
    if (isPrime(number + 2) || isPrime(number - 2)) {
      return true;
    }
  }
  return false;
};

function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(isTwinPrime(5)); //true
console.log(isTwinPrime(9)); // false
console.log(isTwinPrime(7)); // true
console.log(isTwinPrime(953)); // false
