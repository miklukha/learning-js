/*
 * Write a function that returns the transformed string(lowercase to uppercase and vice versa, and reverse the string)
 */

const transformString = str => {
  let newString = '';

  [...str].map(letter => {
    newString +=
      letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
  });

  return newString.split(' ').reverse().join(' ');
};

console.log(transformString('torininGEN THE bEst'));
// BeST the TORININgen
console.log(transformString('JavaScript IS poor LANGUAGE'));
// language POOR is jAVAsCRIPT
