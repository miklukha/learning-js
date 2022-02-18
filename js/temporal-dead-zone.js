/*
 * Temporal Dead Zone (TDZ) is the term to describe the state where variables are un-reachable;
 * The let and const variables exist in the TDZ from the start of their enclosing scope until they are declared.
 * But var won't do that. var is just default initialized to undefined unlike the other declaration.
 */

{
  // This is the temporal dead zone for the age variable!
  // This is the temporal dead zone for the age variable!
  // This is the temporal dead zone for the age variable!
  // This is the temporal dead zone for the age variable!
  let age = 25; // Whew, we got there! No more TDZ
  console.log(age);
}

// console.log(typeof foo); // ReferenceError: Cannot access 'foo' before initialization
// console.log(typeof aVariableThatDoesntExist); // 'undefined'
let foo;

// ! TDZ from the start of their enclosing scope until declaration
let name = 'Lydia';

function getName() {
  console.log(name);
  let name = 'Sarah';
}

getName(); // ReferenceError: Cannot access 'name' before initialization

// Everything ok
let name = 'Lydia';

function getName() {
  console.log(name);
  // let name = 'Sarah';
}

getName(); // Lydia
