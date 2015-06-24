/* 
 * Eloquent JavaScript, Chapter 4 Ex 2
 *
 * Write two functions, reverseArray and reverseArrayInPlace. reverseArray takes
 * an array as argument and produces a new array that has the same elements in
 * the inverse order. reverseArrayInPlace modifies and returns the array given
 * as argument.
 */

'use strict';

var reverseArray = function(givenArray) {
    var reversedArray = [];
    for(var i = givenArray.length - 1; i >= 0; i -= 1) {
        reversedArray.push(givenArray[i]);
    }
    return reversedArray;
};

var abc = ['A', 'B', 'C'];
console.log('Reversed array: ' + reverseArray(abc));

var reverseArrayInPlace = function(anArray) {
    var lastElement = anArray.length - 1;
    var midpoint = Math.floor(lastElement/2);
    var temporaryVariable;
    for(var i = 0; i <= midpoint; i += 1) {
        temporaryVariable = anArray[i];
        anArray[i] = anArray[lastElement - i];
        anArray[lastElement - i] = temporaryVariable;
    }
    return anArray;
};

var abcde = ['A', 'B', 'C', 'D', 'E'];
console.log('Reversed-in-place array: ' + reverseArrayInPlace(abcde));

var numbers = [1, 2, 3, 4, 5, 6];
console.log('Reversed-in-place numbers: ' + reverseArrayInPlace(numbers));
