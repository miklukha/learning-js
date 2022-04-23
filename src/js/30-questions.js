/* 1.
var x = 10;

function bar(funArg) {
  var x = 30;
  funArg();
}

function foo() {
  console.log(x);
}

foo.x = 20;
bar.x = 40;

bar(foo); // 10
*/

/* 2.
const a = {};

function clear(obj) {
  obj.x = 40;
  obj = null;
}

clear(a);

console.log(a); // {x: 40}
 */

/* 3.
setTimeout(function timeout() {
  console.log('1');
}, 0);

Promise.resolve('2').then(console.log);

console.log('3');

// 3, 2, 1
 */

/* 6. 
function foo() {}

foo.x = 10;

console.log(foo.x); // 10
*/

/* 7.
function greet(clientName) {
  console.log(`${clientName}, ласкаво просимо в «${this.service}».`);
}

const steam = {
  service: 'Steam',
};

const steamGreeter = greet.bind(steam);
steamGreeter('Манго'); // "Манго, ласкаво просимо в «Steam»."

const gmail = {
  service: 'Gmail',
};
const gmailGreeter = greet.bind(gmail);
gmailGreeter('Полі'); // "Полі, ласкаво просимо в «Gmail»."

steamGreeter('Kiwi');

steamGreeter('Apple');
*/

/* 9.
const str = 'h2h40h';

const result = str
  .split('h')
  .map(s => s + 10)
  .filter(s => s.length < 4);

console.log(result); //['10', '210', '10']
*/

/* 10.
let obj = {
  '0': 1,
  0: 2,
};

console.log(obj);

console.log(obj['0']);
console.log(obj[0]);

console.log(obj[0] + obj['0']); // 4
*/

/* 11.
const obj1 = {
  x: 10
}

const obj2 = Object.create(obj1);

console.log(obj2.x);
*/

/* 14
var a = 'hello';

function b (){
  console.log(a);
  var a = 'world';
  console.log(a);
}

b();
*/