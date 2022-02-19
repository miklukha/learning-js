/*
 * Arrow functions do not have their own this binding or prototype and cannot be used as a constructor.
 */

let user = {
  firstName: 'Anton',
  sayHi() {
    console.log(this); // {firstName: 'Anton', sayHi: ƒ}
    let arrow = () => {
      console.log(this); // {firstName: 'Anton', sayHi: ƒ}
      console.log(this.firstName); // Anton
    };
    arrow();
  },
};

user.sayHi();

let user1 = {
  firstName: 'Anton',
  sayHi() {
    console.log(this); // {firstName: 'Anton', sayHi: ƒ}
    let arrow = function () {
      console.log(this); // undefined (in strict mode) OR Window
      console.log(this.firstName); // TypeError: Cannot read properties of undefined (reading 'firstName') (in strict mode) OR undefined
    };
    arrow();
  },
};

user1.sayHi();
