/*
 * Write a function that gets a number and squares each digit of that number
 */

function squareDigits(num) {
  const square = num
    .toString()
    .split('')
    .map(number => Number(number) ** 2)
    .join('');

  return Number(square);
}

console.log(squareDigits(3212)); // 9414
