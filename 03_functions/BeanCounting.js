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

var countChar = function(inputString, character) {
    var numberOfCharacter = 0;
    for (var position = 0; position < inputString.length; position +=1) {
        if(inputString.charAt(position) === character) {
            numberOfCharacter += 1;
        }
    }    
    return numberOfCharacter;
};

var countBs = function(inputString) {
   return countChar(inputString, "B");
};

console.log("There are " + countBs("BBC") + " Bs in BBC.");
console.log("There are " + countChar("testing", "t") + " ts in testing.");
