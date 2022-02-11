/*
 * Write a function that gets a positive number and returns the number of times it needs to be multiplied by a number until it gets one digit
 * For example,
 * 39 -> 3
 * (3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4)
 * 4 - consists of only one digit, i.e. to get to it we need 3 iterations
 */

const persistence = num => {
  let array = num.toString().split('');
  let iteration = 0;

  for (iteration = 0; array.length !== 1; iteration += 1) {
    array = array
      .reduce((a, b) => a * b)
      .toString()
      .split('');
  }

  return iteration;
};

console.log(persistence(39)); // 3
console.log(persistence(999)); // 4
console.log(persistence(4)); // 0
