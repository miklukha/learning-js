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

/* 16.
const s1 = ['a', 'b', 'c'];
const s2 = ['d', 'e', 'f'];

const result = s1.concat(s2).join('+');

console.log(result); // a+b+c+d+e+f
 */

/* 17.
    <div id="parent" style="width: 200px; height: 200px; background-color: blueviolet; ">
      <div id="child" style="width: 50px; height: 50px; margin:auto; padding: auto; background-color: aqua;"></div>
    </div>
 */

/* 18.
const meetups = [
  { name: 'JavaScript', isActive: true, members: 100 },
  { name: 'Angular', isActive: true, members: 900 },
  { name: 'Node', isActive: false, members: 600 },
  { name: 'React', isActive: true, members: 500 },
];

const membersOnActiveMeetups = meetups =>
  meetups
    .filter(meetup => meetup.isActive)
    .reduce((sum, meetup) => sum + meetup.members, 0);

console.log(membersOnActiveMeetups(meetups)); // 1500
 */

/* 19.
 Что записывается в свойство [[Scope]] функции? // Текущий LexicalEnvironment или window

 function foo2() {
  function foo() {
    console.log(1);
  }

  foo();
  console.dir(foo);
};

  var color = 'green';
  function outputColor() {
    function displayColor() {
      console.log(color);
    }
    displayColor(); // "green"
  }
  outputColor();

  console.dir(outputColor);
  */

/* 22.
var obj = {
  a: () => {
    console.log(this.prop);
  },
  prop: 1,
};

obj.a();
var fn = obj.a.bind(obj);
fn(); // undefined, undefined
*/

/* 23. 
const obj = {
  x: 10,
  y: 20,
  z: 30,
};

const result = Object.values(obj); // [10, 20, 30]

console.log(result);
*/

/* 27
class GOBListener {
  constructor() {
    this.counter = 0;
  }

  handleClick() {
    this.counter += 1;
    console.log(this.counter);
  }
}

const element = document.querySelector('button');
const listener = new GOBListener();

element.addEventListener('click', listener.handleClick); // NaN, NaN, NaN

// element.addEventListener('click', function () {
//   listener.handleClick();
// });
*/

/* 30.
let a = 10;
a.b = 10;
console.log(a); // 10
*/
