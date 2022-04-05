/*
 * Make the numbers in ascending order in the array
 */

const numbers = [3, 5, 7, 1, 8, 0, 2, 3];

for (let i = 0; i < numbers.length; i += 1) {
  if (i) {
    const currentValue = numbers[i];
    const previousValue = numbers[i - 1];

    if (currentValue !== previousValue + 1) {
      numbers[i] = previousValue + 1;
    }
  }
}

console.log(numbers); // [3, 4, 5, 6, 7, 8, 9, 10]

//? the second way

// for (let i = 0; i < numbers.length; i += 1) {
//   for (let j = i + 1; j < numbers.length; j += 1) {
//     if (numbers[i] !== numbers[j] + 1) {
//       numbers[j] = numbers[i] + 1;
//     }
//   }
// }

// console.log(numbers); // [3, 4, 5, 6, 7, 8, 9, 10]
