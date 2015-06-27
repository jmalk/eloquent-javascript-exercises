/*
 * Eloquent JavaScript, Chapter 4 Ex 3
 *
 * A list is a nested set of objects, with the first object holding a reference
 * to the second, the second to the third, and so on.
 *
 * Write a function arrayToList that builds up a data structure like the
 * previous one when given [1, 2, 3] as argument, and write a listToArray
 * function that produces an array from a list.
 *
 * Also write the helper functions prepend, which takes an element and a list
 * and creates a new list that adds the element to the front of the input list,
 * and nth, which takes a list and a number and returns the element at the
 * given position in the list, or undefined when there is no such element.
 *
 * If you haven’t already, also write a recursive version of nth.
 */

// Some tests

var arrayToList = function(array) {
    "use strict";
    var list = null;
    for (var i = array.length - 1; i >= 0; i -= 1) {
        list = {
            value: array[i],
            rest: list
        };
    }
    return list;
};

var listToArray = function(list) {
    "use strict";
    var objectWeAreLookingAt = list;
    var arrayWeWillReturn = [];
    while (objectWeAreLookingAt !== null) {
        arrayWeWillReturn.push(objectWeAreLookingAt.value);
        objectWeAreLookingAt = objectWeAreLookingAt.rest;
    }
    return arrayWeWillReturn;
};

var prepend = function(element, list) {
    "use strict";
    var newList = {
        value: element,
        rest: list
    };
    return newList;
};

var nth = function(list, index) {
    "use strict";
    if (index === 0) {
        return list.value;
    }
    return nth(list.rest, index - 1);
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// TODO: Add meaningful expected/got console output, or a light test framework.
