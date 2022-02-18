/*
 * Write a function that gets number and returns array of digits this number
 * Cannot use convert number to string
 * The array contains numbers
 * For example,
 * 123456789 -> [1,2,3,4,5,6,7,8,9]
 */

function convertNumToArr(number) {
  const array = [];

  while (number > 0) {
    let remainder = number % 10;

    array.unshift(remainder);
    number = Math.floor(number / 10);
  }

  return array;
}

console.log(convertNumToArr(123456789));
console.log(convertNumToArr(2847));
console.log(convertNumToArr(345672));
console.log(convertNumToArr(32));
console.log(convertNumToArr(9));
