/*
 * Write a function that changes the values of two variables to each other
 *    WITHOUT additional variable
 * The function get two numbers: a, b
 * For example, changeVariables(4, 7) -> {a: 7, b: 4}
 */

function changeVariables(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
  
    return { a, b };
}
  
console.log(changeVariables(4, 7));
  
