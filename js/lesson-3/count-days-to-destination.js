/*
 * Write a function that returns the number of days in which the snail will be able to crawl out of the well
 * The function gets depth of well
 * In the afternoon snail crawl up on 7 meters, in the evening crawl down on 2 meters
 */

function amountOfDays(depth) {
  let days = 0;
  let way = 0;

  while (way < depth) {
    way += 7;

    if (way < depth) {
      way -= 2;
    }

    days += 1;
  }

  return days;
}

console.log(amountOfDays(42)); // 8
console.log(amountOfDays(17)); // 3
console.log(amountOfDays(18)); // 4
