/*
 * Write a function that converts the object's key from camelCase in snake_case
 */

const objectCamelCase = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  dateOfBirth: '2/1/2000',
};

// const keysToSnakeCase = obj => {
//   const newObject = {};
//   const arrOfKeys = Object.keys(obj);
//   let newKey = '';
//
//   for (const key of arrOfKeys) {
//     newKey = key
//       .split('')
//       .map(el => {
//         if (el === el.toUpperCase()) {
//           el = '_' + el.toLowerCase();
//         }

//         return el;
//       })
//       .join('');
//     newObject[newKey] = obj[key];
//   }

//   return newObject;
// };

const keysToSnakeCase = obj => {
  const newObject = {};
  let newKey = '';

  for (const key in obj) {
    newKey = key
      .split('')
      .map(el => {
        if (el === el.toUpperCase()) {
          el = '_' + el.toLowerCase();
        }

        return el;
      })
      .join('');
    newObject[newKey] = obj[key];
  }

  return newObject;
};

console.log(keysToSnakeCase(objectCamelCase));
