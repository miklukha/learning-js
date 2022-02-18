const friends = [
  { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
  { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
  { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
  {
    name: 'Oleksii',
    books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
    age: 26,
  },
];

// Task-1: Count the age of all users that have key age
const sumOfUsers = friends.reduce(
  (sum, friend) => (!!friend.age ? (sum += friend.age) : sum),
  0,
);

console.log(sumOfUsers);

/* Task-2: Count the number of books in users that have the book 'Harry Potter'. Don't use the method 'includes'
(use indexOf() in order to check if users have the necessary book)
*/

const bookOfHarryPotter = friends.reduce((sum, friend) => {
  return !!~friend.books.indexOf('Harry Potter') ? (sum += 1) : sum;
}, 0);

console.log(bookOfHarryPotter);

// Task-3: Get an array of all books and then get an array of unique books

const uniqueBooks = friends
  .flatMap(friend => friend.books)
  .filter((book, index, array) => array.indexOf(book) === index);

console.log(uniqueBooks);
