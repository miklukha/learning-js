const value = -1;

console.log(value); // -1
console.log(~value); // 0
console.log(!!value); // true
console.log(!!~value); // false
console.log(!!(-value - 1)); // false

// -x - 1
// -(-1) - 1 = 1 - 1 = 0

/* 
 !!~array.indexOf(element) -> 
 * if an array has element return true
 * if an array has NOT element return false
*/
