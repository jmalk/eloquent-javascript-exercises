/* 
 * Eloquent JavaScript, Chapter 4 Ex 1
 *
 * Write a range function that takes two arguments, start and end, and returns
 * an array containing all the numbers from start up to (and including) end.
 * Next write a sum function that takes an array of numbers and returns the sum
 * of these numbers. Run `console.log(sum(range(1, 10))); and see if it returns
 * 55.
 *
 * Extra credit: modify range function to take a `step` value which defaults to
 * 1.
 */

var range = function(start, end, step) {
    step = typeof step !== 'undefined' ? step : 1;
    var numbersInRange = [];
    for(var i = start; i <= end; i += step) {
        numbersInRange.push(i);
    }
    return numbersInRange;
};

var sum = function(arrayOfNumbers) {
    var sumTotal = 0;
    for(var i = 0; i < arrayOfNumbers.length; i += 1) {
        sumTotal += arrayOfNumbers[i];
    }
    return sumTotal;
};

console.log(sum(range(1, 10)));
console.log(sum(range(-3, -1)));
console.log(sum(range(1, 9, 2)));
// TODO Currently unable to create a range by descending through numbers
console.log(sum(range(10, 1, -1)));
