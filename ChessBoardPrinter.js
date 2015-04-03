/* 
 * Eloquent JavaScript, Chapter 2 Ex 3
 *
 * Write a program that creates a string that represents an 8x8 grid, using
 * newline characters to separate lines. At each position of the grid is either
 * a space or a "#" character. They should form a chessboard when passed to a
 * console.log statement.
 */

var board = "";
var whiteSquare = " ";
var blackSquare = "#";
var column;
var row;
var width = 8;

for (row = 1; row <= width; row += 1) {
    for (column = 1; column <= width; column += 1) {
        var columnPlusRow = column + row;
        if (columnPlusRow % 2 == 0) {
            board += whiteSquare;
        } else {
            board += blackSquare;
        }
    }
    board += "\n";
}

console.log(board);
