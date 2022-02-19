/*
 * Write a function that returns the number of years that need to achieve the aim
 * The function gets: p0 - current population, percentage - the percentage by which the population increases, aug - residents who come or leave each year, p - goal
 */

function nbYear(p0, percent, aug, p) {
  let years = 0;

  while (p0 < p) {
    p0 += p0 * (percent / 100) + aug;
    years += 1;
  }

  return years;
}

console.log(nbYear(1500000, 0.0, 10000, 2000000)); // 50
console.log(nbYear(1500, 5, 100, 5000)); // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)); // 94
