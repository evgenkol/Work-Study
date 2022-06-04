"use strict";
// let userName = {
//   name: "Yevhen",
//   age: 39,
//   adress: {
//     city: "Chernivtci",
//     street: "Zalozetckogo",
//   },
//   "Zosia Fuga": "My wife",
// };

// console.log(userName.age);
// console.log(userName.adress.street);
// console.log(userName["Zosia Fuga"]);
// console.log(userName);

// let userInfo = {
//   name: "Mike",
//   "hello js": true,
// };
// console.log(userInfo);

// userInfo.age = 30;

// console.log(userInfo);
// console.log(userInfo.age);

// userInfo["like cars"] = true;

// console.log(userInfo);

// userInfo.adress = {
//   city: "Kiyv",
//   street: "Tarasov",
// };

// console.log(userInfo);

// delete userInfo["hello js"];

// console.log(userInfo);

// userInfo.age = 35;

// console.log(userInfo);

// let user = Object.assign({}, userInfo);

// console.log(user);

// for (let key in userName) {
//   console.log(key);
//   console.log(userName[key]);
// }
// for (let key in userName.adress) {
//   console.log(key);
//   console.log(userName.adress[key]);
// }

// let userInfo = {
//   name: "Вася",
//   age: 30,
// };
// console.log(userInfo);
// userInfo.age = 25;
// console.log(userInfo);
// userInfo.adress = "Kiyv";
// console.log(userInfo);
// userInfo.name = "Лена";
// console.log(userInfo);
// delete userInfo.name;
// console.log(userInfo);

// let textOne = "Привет!";
// console.log(textOne.length);

// let text = "Привет!";
// let firstSimbol = text[0];
// let lastSimbol = text[text.length - 1];
// console.log(firstSimbol);
// console.log(lastSimbol);

// for (const char of text) {
//   console.log(char);
// }

// let arrOne = ["Yevhen", "Mike", "Olli"];
// console.log(arrOne[1]);
// console.log(arrOne[5]);
// console.log(arrOne);

let arrTwo = [
  "Billy",
  {
    type: "JS",
    age: 39,
  },
  true,
  function xxx() {
    console.log("Hello, i am Bill!");
  },
];
console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[2]);
arrTwo[3]();

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);
console.log(matrix[0][1]);

let arrOne1 = ["Yevhen", "Mike", "Olli"];
console.log(arrOne1);
console.log(arrOne1.length);
arrOne1[2] = "Tim";
arrOne1[3] = "Sonya";
console.log(arrOne1);

let arrOne = ["Yevhen", "Mike", "Olli,"];
arrOne.splice(1, 0, "Barry");
console.log(arrOne);

// let result = arr.find(function (item, index, array) {
//   // если true - возвращается текущий элемент и перебор прерывается
//   // если все итерации оказались ложными, возвращается undefined
// });

// let arr = [
//   { name: "Вася", age: 36 },
//   { name: "Коля", age: 18 },
//   { name: "Оля", age: "Не скажу" },
// ];

// let resultOne = arr.find(function (item, index, array) {
//   return item.age === 18;
// });

// let resultOne = arr.find((item) => item.age == 18);

// console.log(resultOne);

// let resultTwo = arr.filter((item) => item.age >= 18);
// console.log(resultTwo);

// let resultTwo = arr.findIndex((item) => item.age === 18);
// console.log(resultTwo);

const arr1 = [1, 2, 3];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
// prints [ 2, 4, 6 ]
console.log(arr2);

function even_or_odd(n) {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

function stringToArray() {
  let str = "I love arrays they are my favorite";
  let arrey = str.split(" ");
  console.log(arrey);
}

stringToArray();

// let stringToArray = (arr) => arr.trim().split(" ");
// stringToArray();

// String.prototype.isUpperCase = function () {
//   return String(this) === this.toUpperCase();
// };

// function digitize(n) {

// }

function stringToArray1() {
  let str = "I love arrays they are my favorite";
  let arrey = str.split(" ").reverse();

  console.log(arrey);
}

// stringToArray1();
// let digitize = (n) => n.trim().split(" ").reverse();

function digitize(n) {
  n = n.split(" ").reverse();
  console.log(n);
}
digitize("I love arrays they are my favorite");

function digitize(num) {
  return num.toString().split("").reverse().map(Number);
  console.log(num);
}

digitize("I love arrays they are my favorite");

let myProfil = [
  "Musician",
  true,
  {
    name: "Yevhen",
    age: 39,
  },
];
console.log(myProfil);
