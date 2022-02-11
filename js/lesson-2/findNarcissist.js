/*
 * Write a function that returns name of narcissist
 * Conditions:
 * 1. Everyone knows narcissist
 * 2. The narcissist doesn't know anybody
 */

const people = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];

const people1 = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Eva'],
  },
];

const people2 = [
  {
    name: 'Alex',
    know: ['Ivan'],
  },
  {
    name: 'Jhon',
    know: ['Eva'],
  },
  {
    name: 'Eva',
    know: ['Jhon', 'Alex'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];

const people3 = [
  {
    name: 'Alex',
    know: ['Ivan', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: ['Eva'],
  },
  {
    name: 'Eva',
    know: ['Jhon', 'Alex'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];

function findUser(people) {
  const Narcissist = people.find(user => user.know.length === 0);
  let sum = 0;

  if (!!Narcissist) {
    for (const user of people) {
      if (user.know.includes(Narcissist.name)) {
        sum += 1;
      }
    }

    if (sum === people.length - 1) {
      return Narcissist.name;
    }
  }
  return 'Нарциса не знайдено';
}

console.log(findUser(people));
console.log(findUser(people1));
console.log(findUser(people2));
console.log(findUser(people3));

// The task is from the internet. This is NOT my solution

// function findCelebrity(array) {
//   let l = 0;
//   let r = array.length - 1;

//   while (l !== r) {
//     if (array[l].know.includes(array[r].name)) {
//       l += 1;
//     } else {
//       r -= 1;
//     }
//   }

//   for (let i = 0; i < array.length; i += 1) {
//     if (
//       i !== l &&
//       (!array[i].know.includes(array[l].name) ||
//         array[l].know.includes(array[i].name))
//     ) {
//       return 'Знаменитість не знайдено';
//     }
//   }

//   return array[l].name;
// }

// console.log(findCelebrity(people));
// console.log(findCelebrity(people1));
// console.log(findCelebrity(people2));
// console.log(findCelebrity(people3));
