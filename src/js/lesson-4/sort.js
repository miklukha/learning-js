/*
 * Modify the code so that the users array is sorted by age
 */

const createUser = function (name, age) {
  return {
    name,
    age,
    toString: function () {
      return `${this.name} is ${this.age}y.o.`;
    },
  };
};

const users = [
  createUser('John', 21),
  createUser('Tory', 18),
  createUser('Kate', 23),
  createUser('Pete', 22),
];

users.sort((a, b) => a.age - b.age);

console.log(users);

/*
 * Modify the code so that the users array is sorted by age. Without modifying the method sort()
 */

// const createUser = function (name, age) {
//   return {
//     name,
//     age,
//     toString: function () {
//       return `${this.age} is the age of ${this.name}.`;
//     },
//   };
// };

// const users = [
//   createUser('John', 21),
//   createUser('Tory', 18),
//   createUser('Kate', 23),
//   createUser('Pete', 22),
// ];

// users.sort();

// console.log(users);
