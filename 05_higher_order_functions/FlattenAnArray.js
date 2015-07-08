/*
 * Eloquent JavaScript, Chapter 5 Ex 1
 *
 * Use the reduce method in combination with the concat method to “flatten” an
 * array of arrays into a single array that has all the elements of the input
 * arrays.
 */

var arrays = [[1, 2, 3], [4, 5], [6]];
var flattened = arrays.reduce(function(a, b) {
    'use strict';
    return a.concat(b);
});
console.log('Expected: [1, 2, 3, 4, 5, 6], got: ' + flattened);
