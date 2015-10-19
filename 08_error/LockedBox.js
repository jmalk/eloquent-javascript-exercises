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
 */

