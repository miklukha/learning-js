/*
 * Create a new string without the letter 'а'
 */

const magic = 'Авадакедавра';
let sum = 0;

const magicArray = magic.toLowerCase().split('');

for (let i = 0; i < magicArray.length; i += 1) {
  if (magicArray[i] === 'а') {
    magicArray.splice(i, 1);
    sum += 1;
  }
}

const magicWord = magicArray.join('');

console.log(magicWord);
console.log("Сума літер 'а' = ", sum);
