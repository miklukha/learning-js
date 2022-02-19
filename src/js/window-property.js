/*
 * !!!Works only in non-strict mode!!!
 */

(() => {
  let x = (y = 10);
})();

console.log(typeof x); // undefined
console.log(typeof y); // number
console.log(window.y); // 10
console.log(y); // 10

c = 5;

console.log(window.c); // 5
console.log(c); // 5

const a = (b = 5);

console.log(a); // 5
console.log(b); // 5
console.log(typeof a); // number
console.log(typeof b); // number
