/*
 *  Write a function that returns the array of pairs.
 */

const array = [1, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 10, 11, 12];

function findPairOfNumber(array) {
  const arrayOfPair = [];

  [...array]
    .sort((a, b) => b - a)
    .reduce((previousValue, currentValue) => {
      if (previousValue === currentValue) {
        arrayOfPair.push([previousValue, currentValue]);
      } else {
        return currentValue;
      }
    });

  return arrayOfPair;
}

console.log(findPairOfNumber(array)); // [[12, 12], [11, 11], [10, 10], [3, 3], [2, 2], [1, 1]]
