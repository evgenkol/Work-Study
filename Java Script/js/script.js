// function min(arr) {
//   let minNum = Math.min(...arr);
//   return minNum;
// }

// function max(arr) {
//   let maxNum = Math.max(...arr);
//   return maxNum;
// }

// let min = (arr) => Math.min(...arr);
// let max = (arr) => Math.max(...arr);

let min = (arr) => arr.sort((a, b) => a - b)[0];
let max = (arr) => arr.sort((a, b) => b - a)[0];

console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(min([-52, 56, 30, 29, -54, 0, -110]));
