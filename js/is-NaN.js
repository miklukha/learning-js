/*
 * isNaN converts the argument to a Number and returns true if the resulting value is NaN.
 * Number.isNaN does NOT convert the argument; it returns true when the argument is a Number and is NaN.
 */

console.log(Number(NaN)); // NaN
console.log(isNaN(NaN)); // true
console.log(Number.isNaN(NaN)); // true

console.log(Number('pony' / 'foo')); // NaN
console.log(isNaN('pony' / 'foo')); // true
console.log(Number.isNaN('pony' / 'foo')); // true

console.log(Number(0 / 0)); // NaN
console.log(isNaN(0 / 0)); // true
console.log(Number.isNaN(0 / 0)); // true

console.log(Number(undefined)); // NaN
console.log(isNaN(undefined)); // true
console.log(Number.isNaN(undefined)); // false

console.log(Number({})); // NaN
console.log(isNaN({})); // true
console.log(Number.isNaN({})); // false

console.log(Number('pony')); // NaN
console.log(isNaN('pony')); // true
console.log(Number.isNaN('pony')); // false

console.log(new Number(0 / 0)); // Number {NaN}
console.log(Number(new Number(0 / 0))); // NaN
console.log(isNaN(new Number(0 / 0))); // true
console.log(Number.isNaN(new Number(0 / 0))); // false

console.log(new Number(3)); // Number {3}
console.log(Number(new Number(3))); // 3
console.log(isNaN(new Number(3))); // false
console.log(Number.isNaN(new Number(3))); // false

console.log(Number(null)); // 0
console.log(isNaN(null)); // false
console.log(Number.isNaN(null)); // false

console.log(Number(Infinity)); // Infinity
console.log(isNaN(Infinity)); // false
console.log(Number.isNaN(Infinity)); // false

console.log(Number(4)); // 4
console.log(isNaN(4)); // false
console.log(Number.isNaN(4)); // false
