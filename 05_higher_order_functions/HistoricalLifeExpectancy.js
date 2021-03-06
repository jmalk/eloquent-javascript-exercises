/*
 * When we looked up all the people in our data set that lived more than 90
 * years, only the latest generation in the data came out. Let’s take a closer
 * look at that phenomenon.
 *
 * Compute and output the average age of the people in the ancestry data set per
 * century. A person is assigned to a century by taking their year of death,
 * dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).
 *
 * For bonus points, write a function groupBy that abstracts the grouping
 * operation. It should accept as arguments an array and a function that
 * computes the group for an element in the array and returns an object that
 * maps group names to arrays of group members.
 */

var ancestry = require('./ancestry.js');
ancestry = JSON.parse(ancestry);

function average(array) {
    'use strict';
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

function centuryOfDeath(person) {
    return Math.ceil(person.died / 100);
}

function ageAtDeath(person) {
    return person.died - person.born;
}

function lifeExpectancyByCentury(century, people) {
    // filter input by people who died in century
    var peopleWhoDiedInGivenCentury = people.filter(function(person) {
        return centuryOfDeath(person) === century;
    });
    // average age-at-death of the filtered group
    var agesOfPeopleWhoDiedInGivenCentury = peopleWhoDiedInGivenCentury.map(function(person) {
        return ageAtDeath(person);
    });
    return average(agesOfPeopleWhoDiedInGivenCentury);
}

console.log('16: ' + lifeExpectancyByCentury(16, ancestry));
console.log('17: ' + lifeExpectancyByCentury(17, ancestry));
console.log('18: ' + lifeExpectancyByCentury(18, ancestry));
console.log('19: ' + lifeExpectancyByCentury(19, ancestry));
console.log('20: ' + lifeExpectancyByCentury(20, ancestry));
console.log('21: ' + lifeExpectancyByCentury(21, ancestry));

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
