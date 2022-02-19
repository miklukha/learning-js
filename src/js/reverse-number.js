/*
 * Write a function that reverse number, but
 * 1. The function gets string
 * 2. The function must returns string
 * 3. If number is outside the range [-2^31, 2^31 - 1] returns '0'
 */
const reverseNumber = number => {
  const integer = Number(number);

  if (integer < Math.pow(-2, 31) || integer > Math.pow(2, 31 - 1)) {
    return '0';
  }

  let newString = '';
  const minus = '-';

  for (let i = number.length - 1; i >= 0; i -= 1) {
    if (number[i] === '0') {
      continue;
    }

    if (number[i] === '-') {
      newString = minus + newString;
      break;
    }
    newString += number[i];
  }
  return newString;
};

console.log(reverseNumber('123')); // 321
console.log(reverseNumber('120')); // 21
console.log(reverseNumber('-321')); //-123
console.log(reverseNumber('299067564754747757')); //0
