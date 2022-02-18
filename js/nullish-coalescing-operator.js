/*
 * The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
 */

const a = null ?? 'a';
console.log(a); // a

const b = undefined ?? 5;
console.log(b); // 5

const c = 0 ?? 42;
console.log(c); // 0

const d = '' ?? 'd';
console.log(d); // ''

const e = false ?? 2;
console.log(e); // false

const f = NaN ?? 'f';
console.log(f); // NaN

const g = 'a' ?? 'b';
console.log(g); // a

const h = 4 ?? 5;
console.log(h); // 4
