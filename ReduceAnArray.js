var flatArray = [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]].reduce(function(a, b) {
    console.log(a.concat(b));
    return a.concat(b);
});

console.log("The flattened array is: ");
console.log(flatArray);

var flatArrayWithInitialValue = [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]].reduce(function(a, b) {
    console.log(a.concat(b));
    return a.concat(b);
}, [-2, -1]);

console.log("The flattened array with one more 2-vector prepended is: ");
console.log(flatArrayWithInitialValue);
