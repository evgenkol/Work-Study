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

let userInfo = {
  name: "Вася",
  age: 30,
};
console.log(userInfo);
userInfo.age = 25;
console.log(userInfo);
userInfo.adress = "Kiyv";
console.log(userInfo);
userInfo.name = "Лена";
console.log(userInfo);
delete userInfo.name;
console.log(userInfo);
