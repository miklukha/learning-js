/*
 * The closure is a function that has access to the outer function, even after the outer function stop.
 * https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
 */

function a() {
  const v = 6;

  function b() {
    return v;
  }

  return b();
}

const c = a();
console.log(c); // 6

// function makeFunc() {
//   let counter = 1;

//   function displayName(num) {
//     return (counter += num);
//   }
//   return displayName;
// }

// const counter = makeFunc();

// console.log(counter(5)); // 6
// console.log(counter(6)); // 12
// console.log(counter(7)); // 19
// console.log(counter(8)); // 27
