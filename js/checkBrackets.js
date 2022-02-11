/*
 * Is NOT my solution!
 * Write a function that checks if brackets are located correctly.
 */

const tests = ['(())(){[}]', '{}', '[({})[', '({[]})', ''];

const checkBrackets = str => {
  return !str
    .split('')
    .reduce(
      (acc, element) =>
        !acc
          ? element
          : '[]{}()'.includes(acc.slice(-1)[0] + element)
          ? acc.substring(0, acc.length - 1)
          : acc + element,
      '',
    );
};

console.log(checkBrackets(tests[0])); // false
console.log(checkBrackets(tests[1])); // true
console.log(checkBrackets(tests[2])); // false
console.log(checkBrackets(tests[3])); // true
console.log(checkBrackets(tests[4])); // true
