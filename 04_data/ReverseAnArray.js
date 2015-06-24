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

//TODO add reverseArrayInPlace
