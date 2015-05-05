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

var range = function(start, end) {
    var numbersInRange = [];
    for(var i = start; i <= end; i += 1) {
        numbersInRange.push(i);
    }
    return numbersInRange;
};

console.log(range(1, 10));

var sum = function(arrayOfNumbers) {
    var sumTotal = 0;
    for(var i = 0; i < arrayOfNumbers.length; i += 1) {
        sumTotal += arrayOfNumbers[i];
    }
    return sumTotal;
};

console.log(sum([1, 2]));

