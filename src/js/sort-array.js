/*
 * Sort array
 */

const langs = ['python', 'javascript', 'c++', 'haskell', 'php', 'ruby'];

// The first method

langs.sort();

console.log(langs);

// or

langs.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
});

console.log(langs);

// The second method

// for (let i = 0; i < langs.length; i += 1) {
//   for (let j = i + 1; j < langs.length; j += 1) {
//     if (langs[i].localeCompare(langs[j]) > 0) {
//       let temp = langs[i];
//       langs[i] = langs[j];
//       langs[j] = temp;
//     }
//   }
// }

// console.log(langs);

// The third method

// function smallestWord(array) {
//   let smallestWord = array[0];
//   let smallestIndex = 0;
//   for (let i = 1; i < array.length; i += 1) {
//     if (smallestWord > array[i]) {
//       smallestWord = array[i];
//       smallestIndex = i;
//     }
//   }
//   return smallestIndex;
// }

// function sortArray(array) {
//   const sortedArray = [];
//   const length = array.length;
//   for (let i = 0; i < length; i += 1) {
//     let smallestIndex = smallestWord(array);
//     sortedArray.push(array[smallestIndex]);
//     array.splice(smallestIndex, 1);
//   }
//   return sortedArray;
// }
// console.log(sortArray(langs));
// console.log(smallestWord(langs));

// Insertion Sort

// for (let i = 1; i < langs.length; i += 1) {
//   let temp = langs[i];
//   let j = i - 1;
//   while (j >= 0 && temp < langs[j]) {
//     langs[j + 1] = langs[j];
//     j -= 1;
//   }
//   langs[j + 1] = temp;
// }

// console.log(langs);
