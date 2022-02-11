/*
 * Write a function that returns the number of seconds left until midnight. The function should work on any day, e.i. it should not matter today's date.
 */

function getSecondsToTomorrow() {
  const today = new Date();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  const currentTime = hour * 3600 + minutes * 60 + seconds;
  const midnightTime = 24 * 3600;

  return midnightTime - currentTime;
}

console.log(getSecondsToTomorrow());
