/*
 * Find if exist number k
 * The function get two positive numbers: num and p. Num is written as abcd...
 * This is condition (a ^ p + b ^ (p+1) + c ^ (p+2) + d ^ (p+3) + ...) = n * k
 * If k exist return it, if not - return -1
 */

function digPow(num, p) {
  const arrOfNum = num.toString().split('');
  let k = 0;

  const sum = arrOfNum.reduce((sum, num, i) => {
    return sum + Number(num) ** (p + i);
  }, 0);

  k = sum / num;

  return Number.isInteger(k) ? k : -1;
}

console.log(digPow(89, 1)); // return 1  since 8¹ + 9² = 89 = 89 * 1
console.log(digPow(92, 1)); // return -1 since there is no k such as 9¹ + 2² equals 92 * k
console.log(digPow(695, 2)); // return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
console.log(digPow(46288, 3)); // return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// function digPow(n, p) {
//   const numberArray = [];
//   let number = n;
//   let sum = 0;
//   let k;

//   while (number) {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);

//     numberArray.unshift(remainder);
//   }

//   for (let i = 0; i < numberArray.length; i += 1) {
//     sum += Math.pow(numberArray[i], p + i);
//   }

//   k = sum / n;

//   return Number.isInteger(k) ? k : -1;
// }

// function digPow(n, p) {
//   const numberArray = n.toString().split('');
//   let sum = 0;
//   let k;

//   for (let i = 0; i < numberArray.length; i += 1) {
//     sum += Math.pow(Number.parseInt(numberArray[i]), p + i);
//   }

//   k = sum / n;

//   return Number.isInteger(k) ? k : -1;
// }
