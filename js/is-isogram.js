/*
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
 * Write a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

 * For example,
 * "Dermatoglyphics" --> true
 * "aba" --> false
 * "moOse" --> false (ignore letter case)
 */

function isIsogram(str) {
  return !str
    .toLowerCase()
    .split('')
    .sort()
    .find((el, index, array) => el === array[index + 1]);
}

console.log(isIsogram('')); //true
console.log(isIsogram('isIsogram')); // false
console.log(isIsogram('moOse')); // false
console.log(isIsogram('Dermatoglyphics')); //true
