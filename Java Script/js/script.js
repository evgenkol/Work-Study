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
