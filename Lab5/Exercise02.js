// Array.prototype.removeDuplicatesAsync = function() {
//     let arr = this;
//     new Promise(function(resolve, reject) {
//         resolve([...new Set(arr)]);
//     }).then(console.log);
// }

Array.prototype.removeDuplicatesAsync = async function() {
    console.log(await [...new Set(this)]);
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]