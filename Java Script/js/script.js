let message = "Hello!";
let number = 2;
if (2 > 1) {
  console.log(message);
}
message = "Hello Zosya!";
if (number > 1) {
  console.log(message);
} else {
  console.log("((((");
}

function getSum(a = 3, b = 5) {
  let sum = a + b;

  console.log(sum);
}
getSum();

let myInfo = {
  name: "Yevhen",
  age: 39,
};
console.log(myInfo);
console.log(myInfo.name);

let sumMix = (m) => m.map((a) => Number(a)).reduce((a, b) => a + b, 0);
console.log(sumMix([9, 3, "7", "3"]));

let index = (array, n) => Math.pow(array[n], n) || -1;

console.log(index([1, 2, 3, 4], 2));
console.log(index([6, 31], 3));

function position(letter) {
  let alph = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alph.indexOf(letter) - 1}`;
}
console.log(position("d"));
function sumArray(a) {
  return a
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, b) => a + b, 0);
}
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([null]));
console.log(sumArray([-6, 20, -1, 10, -12]));

let Hero = (name) => (name == null ? "Hero" : name);
console.log(Hero());

let find_average = (array) => array.reduce((a, b) => a + b, 0) / array.length;
console.log(find_average([1, 1, 1]));
