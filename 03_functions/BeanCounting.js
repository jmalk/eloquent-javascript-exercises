/* 
 * Eloquent JavaScript, Chapter 3 Ex 3
 *
 * Write a function countBs that takes a string and returns a number that
 * indicates how many uppercase 'B' characters are in the string.
 *
 * Next, write a function called countChar that behaves like countBs, except it
 * takes a second argument that indicates the character that is to be counted.
 * Rewrite countBs to make use of this new function.
 */

var countBs = function(inputString) {
    var numberOfBs = 0;
    for (var character = 0; character < inputString.length; character += 1) {
       if(inputString.charAt(character) === "B") {
          numberOfBs += 1;
       }
    }
    return numberOfBs;
};

console.log(countBs("BBC"));
