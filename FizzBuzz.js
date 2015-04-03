/* 
 * Eloquent JavaScript, Chapter 2 Ex 2
 *
 * Write a program that uses console.log to print numbers 1 through 100,
 * replacing numbers divisible by 3 with "Fizz", and by 5 but not 3 with "buzz".
 * Then modify to print "FizzBuzz" for those divisible by both 3 and 5.
 */

var number;
var numberToCountUpTo = 16;
var fizz = "Fizz!";
var buzz = "Buzz!";
var fizzBuzz = "FizzBuzz!";

for (number = 1; number <= numberToCountUpTo; number += 1) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log(fizzBuzz);
    } else if (number % 3 == 0) {
        console.log(fizz);
    } else if (number % 5 == 0) {
        console.log(buzz);
    } else {
        console.log(number);
    }
}
