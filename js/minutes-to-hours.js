/*
 * Write a function that converts totalMinutes and returns a string in format HH:MM.
 * 70 -> 01:10
 * 450 -> 07:30
 * 1441 -> 24:01
 */

function convertTotalMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const doubleDigitHours = String(hours).padStart(2, 0);
  const doubleDigitMinutes = String(minutes).padStart(2, 0);

  return `${doubleDigitHours}:${doubleDigitMinutes}`;
}

console.log(convertTotalMinutes(70)); // 01:10
console.log(convertTotalMinutes(450)); // 07:30
console.log(convertTotalMinutes(1441)); // 24:01
