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

var ancestry = require('./ancestry.js');
ancestry = JSON.parse(ancestry);

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

function hasKnownMother (person) {
    mothersName = person['mother'];
    if (byName[mothersName]) {
        return true;
    } else {
        return false;
    }
}

var peopleWithKnownMothers = ancestry.filter(hasKnownMother);

var ageDifferences = peopleWithKnownMothers.map(function(person) {
    return person.born - byName[person.mother].born;
})

var averageMotherChildAgeDifference = average(ageDifferences);

console.log('Expected average age difference: 31.2, got: ' + averageMotherChildAgeDifference);
