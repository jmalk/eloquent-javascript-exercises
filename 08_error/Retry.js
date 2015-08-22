/*
 * Eloquent JavaScript, Chapter 8 Ex 1
 *
 * Say you have a function primitiveMultiply that, in 50 percent of
 * cases, multiplies two numbers, and in the other 50 percent, raises an
 * exception of type MultiplicatorUnitFailure. Write a function that
 * wraps this clunky function and just keeps trying until a call
 * succeeds, after which it returns the result.
 *
 * Make sure you handle only the exceptions you are trying to handle.
 */

function MultiplicatorUnitFailure() {
    'use strict';
}

function primitiveMultiply(a, b) {
    'use strict';
    if (Math.random() < 0.5) {
        return a * b;
    }
    else {
        throw new MultiplicatorUnitFailure();
    }
}

function reliableMultiply(a, b) {
    'use strict';
    try {
        primitiveMultiply(a, b);
    } catch(error) {
        console.log(error.message);
    }
}

console.log('Multiplied 8 by 8, got:', reliableMultiply(8, 8));
