/*
 * Undefined -> "undefined"
 * Null	-> "object"
 * Boolean -> "boolean"
 * Number	-> "number"
 * String	-> "string"
 * Symbol	-> "symbol"
 * BigInt	-> "bigint"
 * Object(does not implement [[Call]]) ->	"object"
 * Object(implements [[Call]]) ->	"function"
 */

console.log(typeof ''); // "string"
console.log(typeof 'hello'); // "string"
console.log(typeof String('hello')); // "string"
console.log(typeof new String('hello')); // "object"

console.log(typeof 0); // "number"
console.log(typeof -0); // "number"
console.log(typeof 0xff); // "number"
console.log(typeof -3.142); // "number"
console.log(typeof Infinity); // "number"
console.log(typeof -Infinity); // "number"
console.log(typeof NaN); // "number"
console.log(typeof Number(53)); // "number"
console.log(typeof new Number(53)); // "object"

console.log(typeof true); // "boolean"
console.log(typeof false); // "boolean"
console.log(typeof new Boolean(true)); // "object"

console.log(typeof undefined); // "undefined"

console.log(typeof null); // "object"

console.log(typeof Symbol()); // "symbol"

console.log(typeof []); // "object"
console.log(typeof Array(5)); // "object"

console.log(typeof function () {}); // "function"
console.log(typeof new Function()); // "function"

console.log(typeof new Date()); // "object"

console.log(typeof /^(.+)$/); // "object"
console.log(typeof new RegExp('^(.+)$')); // "object"

console.log(typeof {}); // "object"
console.log(typeof new Object()); // "object"
