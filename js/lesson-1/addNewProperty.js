/*
 * Add new item in object
 */

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'На березі спокійних вод',
    author: 'Роберт Шеклі',
    rating: 8.51,
  },
  {
    title: 'Сон смішної людини',
    author: 'Федір Достоєвський',
    rating: 7.75,
  },
];

console.table(books);

for (let i = 0; i < books.length; i += 1) {
  console.log(books[i]);

  books[i].newProperty = 34 + i;
}

console.table(books);
