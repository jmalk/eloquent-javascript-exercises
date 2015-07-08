/*
 * Eloquent JavaScript, Chapter 5 Ex 2
 *
 * Using the example data set from this chapter, compute the average age
 * difference between mothers and children (the age of the mother when the child
 * is born). You can use the average function defined earlier in this chapter.
 *
 * Note that not all the mothers mentioned in the data are themselves present in
 * the array. The byName object, which makes it easy to find a person’s object
 * from their name, might be useful here.
 */

function average(array) {
    'use strict';
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
    'use strict';
    byName[person.name] = person;
});

console.log('Expected average age difference: 31.2, got: ');
