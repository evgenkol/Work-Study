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
let a = (a, b) => a.filter((x) => !b.includes(x));

console.log(a([5], [12]));

let basicOp = (operation, value1, value2) => eval(value1 + operation + value2);

console.log(basicOp("/", 49, 7));
console.log(basicOp("+", 4, 7));

let check = (a, x) => a.includes(x);
console.log(check([66, 101], 66));

let twoSort = (s) => s.sort()[0].split("").join("***");

console.log(
  twoSort([
    "turns",
    "out",
    "random",
    "test",
    "cases",
    "are",
    "easier",
    "than",
    "writing",
    "out",
    "basic",
    "ones",
  ])
);

let orderedCount = (text) => {
  let abc = "abcdefghijklmnopqrstuvwxyz";
  return abc.split("").map((a) => text.indexOf(a) + 1);
};
console.log(orderedCount("bcm"));

let divisibleBy = (numbers, divisor) =>
  numbers.filter((a) => Number.isInteger(a / divisor));

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

function splitTheBill(x) {
  let obj = { A: x.A - x.B, B: x.B - x.B, C: x.C - x.B };
  return obj;
}

console.log(splitTheBill({ A: 20, B: 15, C: 10 }));
console.log(splitTheBill({ A: 40, B: 25, X: 10 }));

let maxMultiple = (divisor, bound) => bound - (bound % divisor);

console.log(maxMultiple(3, 10));

let summation = (num) => {
  let arr = Array.from({ length: num }, (v, k) => k + 1);
  return arr.reduce((a, b) => a + b, 0);
};

console.log(summation(8));

let number1 = (array) => array.map((a, b) => b + 1 + ": " + a);

console.log(number1(["a", "b", "c"]));

let expressionMatter = (a, b, c) =>
  Math.max(
    a * (b + c),
    a * b * c,
    a + b * c,
    (a + b) * c,
    a * b + c,
    a + b + c
  );

console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(2, 1, 1));
console.log(expressionMatter(1, 2, 3));
