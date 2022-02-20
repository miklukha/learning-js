/*
 * Write a function that gets string and returns an array of turned vertically rows
 * For example,
 * 'HOW ARE YOU' -> ['HAY', 'ORO', 'WEU']
 * HOW
 * ARE
 * YOU
 */

// ! modify function !

function turnVerticallyRows(string) {
  const array = string.split(' ');

  const newArr = [];
  let i = 0;
  while (i < array.length) {
    newArr.push(reduceArr(array, i));
    i += 1;
  }

  return newArr;
}

function reduceArr(array, i) {
  return array.reduce((acc, el) => {
    acc += el[i];
    return acc;
  }, '');
}

console.log(turnVerticallyRows('HOW ARE YOU')); // ['HAY', 'ORO', 'WEU']
// console.log(turnVerticallyRows('TO BE OR NOT TO BE')); // ['TBONTB', 'OEROOE', 'T']
