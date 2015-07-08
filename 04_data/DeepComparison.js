/*
 * Eloquent JavaScript, Chapter 4 Ex 4
 *
 * The == operator compares objects by identity. But sometimes, you would
 * prefer to compare the values of their actual properties.
 *
 * Write a function, deepEqual, that takes two values and returns true only if
 * they are the same value or are objects with the same properties whose values
 * are also equal when compared with a recursive call to deepEqual.
 *
 * To find out whether to compare two things by identity (use the === operator
 * for that) or by looking at their properties, you can use the typeof
 * operator. If it produces "object" for both values, you should do a deep
 * comparison. But you have to take one silly exception into account: by a
 * historical accident, typeof null also produces "object".
 */

// Your code here.

var deepEqual = function(firstValue, secondValue) {
    "use strict";
    if (typeof firstValue === "object" && firstValue !== null && typeof secondValue === "object" && secondValue !== null) {

        var numberOfPropertiesInFirstObject = 0;
        var numberOfPropertiesInSecondObject = 0;

        for (var property in firstValue) {
            if (firstValue.hasOwnProperty(property)) {
            numberOfPropertiesInFirstObject += 1;
        }

        }
        for (var property in secondValue) {
                if (secondValue.hasOwnProperty(property)) {
            numberOfPropertiesInSecondObject += 1;
            }
        }

        if (numberOfPropertiesInFirstObject !== numberOfPropertiesInSecondObject) {
            return false;
        }
    }
    else {
        return firstValue === secondValue;
    }
};

var obj = {here: {is: "an"}, object: 2};
var obj2 = {This: "object", has: "many", properties: "of", its: "own"};
console.log('Expect true, got ' + deepEqual(obj, obj));
console.log('Expect false, got ' + deepEqual(obj, {here: 1, object: 2}));
console.log('Expect true, got ' + deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log('Expect true, got ' + deepEqual(1, 1));
console.log('Expect false, got ' + deepEqual(1, 2));
console.log('Expect false, got ' + deepEqual(obj, obj2));
