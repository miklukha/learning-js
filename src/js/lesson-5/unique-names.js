/*
 * Delete the same name from object
 */

const names = {
  user: 'Artem',
  user1: 'Denis',
  user2: 'Kate',
  user3: 'Dima',
  user4: 'Denis',
  user5: 'Denis',
  user6: 'Kate',
  user7: 'Kristina',
};

const users = Object.keys(names);

for (let i = 0; i < users.length; i += 1) {
  for (let j = i + 1; j < users.length; j += 1) {
    if (names[users[i]] === names[users[j]]) {
      delete names[users[j]];
    }
  }
}

console.log(names);

// The unique names

const users1 = Object.keys(names);

for (let i = 0; i < users1.length; i += 1) {
  console.log(names[users1[i]]);
}
