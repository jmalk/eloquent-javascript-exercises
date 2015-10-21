/*
 * Eloquent JavaScript, Chapter 8 Ex 2
 *
 * It [the object declared below] is a box with a lock. Inside is an array, but
 * you can get at it only when the box is unlocked. Directly accessing the
 * _content property is not allowed.
 *
 * Write a function called withBoxUnlocked that takes a function value as
 * argument, unlocks the box, runs the function, and then ensures that the box
 * is locked again before returning, regardless of whether the argument
 * function returned normally or threw an exception. 
 *
 * For extra points, make sure that if you call withBoxUnlocked when the box is
 * already unlocked, the box stays unlocked.
 */

var box = {
    locked: true,
    unlock: function() {
        'use strict';
        this.locked = false;
    },
    lock: function() {
        'use strict';
        this.locked = true;
    },
    _content: [],
    get content() {
        'use strict';
        if (this.locked) {
            throw new Error("Locked!");
        }
        return this._content;
    }
};

function withBoxUnlocked(body) {
    'use strict';
    var boxWasLocked = box.locked;
    try {
        console.log('Trying something with the box unlocked.');
        box.unlock();
        body();
    } catch (e) {
        console.log('Error:', e.message);
    } finally {
        if (boxWasLocked) { box.lock(); }
    }
}

withBoxUnlocked(function() {
    'use strict';
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        'use strict';
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}
console.log('Box locked? Expect true, got:', box.locked);
// → true
