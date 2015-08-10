/*
 * Eloquent JavaScript, Chapter 6 Ex 1
 *
 * Write a constructor Vector that represents a vector in two-dimensional
 * space. It takes x and y parameters (numbers), which it should save to
 * properties of the same name.
 *
 * Give the Vector prototype two methods, plus and minus, that take another
 * vector as a parameter and return a new vector that has the sum or difference
 * of the two vectors’ (the one in this and the parameter) x and y values.
 *
 * Add a getter property length to the prototype that computes the length of
 * the vector—that is, the distance of the point (x, y) from the origin (0, 0).
 */

function Vector(x, y) {
    'use strict';

    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(vector) {
    'use strict';

    var x = this.x + vector.x;
    var y = this.y + vector.y;
    return new Vector(x, y);
};

Vector.prototype.minus = function(vector) {
    'use strict';

    var x = this.x - vector.x;
    var y = this.y - vector.y;
    return new Vector(x, y);
};

Vector.prototype.length = function() {
    'use strict';

    var squareOfHypotenuse = this.x * this.x + this.y * this.y;
    return Math.sqrt(squareOfHypotenuse);
};

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length());
// → 5
