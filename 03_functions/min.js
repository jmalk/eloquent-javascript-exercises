/* 
 * Eloquent JavaScript, Chapter 3 Ex 1
 *
 * Write a function min that takes two arguments and returns their minimum. 
 */

var min = function(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        return firstNumber;
    } else if (secondNumber < firstNumber) {
        return secondNumber;
    } else {
        return "Those numbers are equal! Or something went wrong.";
    }

};

console.log(min(1, 2));
