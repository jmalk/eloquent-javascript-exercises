/* 
 * Eloquent JavaScript, Chapter 3 Ex 2
 *
 * Zero is even. One is odd. For any other number N, its evenness is the same as
 * N-2. Define a recursive function isEven corresponding to this description. It
 * should accept a number parameter and return a Boolean.
 *
 * Test it on 50 and 75. See how it behaves on -1. If there is a problem with
 * this, can you think of a way to fix it?
 */

var isEven = function(number) {
    number = Math.abs(number);
    if(number === 0) {
        return true;
    }
    if(number === 1) {
        return false;
    }
    return isEven(number - 2);
};

console.log("75 is even: " + isEven(75));
console.log("50 is even: " + isEven(50));
console.log("-1 is even: " + isEven(-1));
