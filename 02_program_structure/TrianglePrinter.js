/* 
 * Eloquent JavaScript, Chapter 2 Ex 1
 *
 * Write a loop that makes seven calls to console.log to output a triangle of hashes (seven hashes on the bottom row, one fewer on each row up).
 */

var hash = "#";
var lineOfHashes = "";
var baseWidthOfTriangle = 7;

for (var rowLength = 1; rowLength <= baseWidthOfTriangle; rowLength++) {
    while (lineOfHashes.length < rowLength) {
        lineOfHashes += hash;
    }
    console.log(lineOfHashes);
    lineOfHashes = "";
}
