/*
 * Find friends who contain the letter 'A' in their name
 */

const friends = ['Anton', 'Andriy', 'Anna', 'Oleksii', 'Marina'];

const friendsWithA = [];

for (const friend of friends) {
  // console.log(friend);

  const lettersArray = friend.split('');
  console.log(lettersArray[0]);

  for (let i = 0; i < lettersArray.length; i += 1) {
    if (lettersArray[i] === 'A') {
      let name = lettersArray.join('');
      friendsWithA.push(name);
    }
    break;
  }
}
console.log(friendsWithA);
