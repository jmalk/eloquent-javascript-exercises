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

function MultiplicatorUnitFailure(message) {
    'use strict';
    this.message = message;
    this.stack = (new Error()).stack;
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = 'MultiplicatorUnitFailure';

function primitiveMultiply(a, b) {
    'use strict';
    if (Math.random() < 0.5) {
        return a * b;
    }
    else {
        throw new MultiplicatorUnitFailure('Primitive attempt at multiplication failed.');
    }
}

function reliableMultiply(a, b) {
    'use strict';
    for (;;) {
        try {
            return primitiveMultiply(a, b);
        } catch (error) {
            if (error instanceof MultiplicatorUnitFailure) {
                console.log('Failed to multiply, trying again.');
            } else {
                throw error;
            }
        }
    }
}

console.log('Multiplied 8 by 8, got:', reliableMultiply(8, 8));
