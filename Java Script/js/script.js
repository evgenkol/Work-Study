// let message = "Hello!";
// let number = 2;
// if (2 > 1) {
//   console.log(message);
// }
// message = "Hello Zosya!";
// if (number > 1) {
//   console.log(message);
// } else {
//   console.log("((((");
// }

// function number1(first = 5, second = 4) {
//   let product = first * second;
//   let sum = first + second;
//   console.log(product);
//   console.log(sum);
// }
// number1(888, 8);

// let num = 0;
// while (num < 5) {
//   console.log(num);
//   num++;
// }

// let num = 0;
// for (; num < 8; num++) {
//   if (num == 5) continue;
//   if (num == 6) continue;
//   console.log(num);
// }

// let num1 = 15;
// for (; num1 > 9; num1++) {
//   console.log(num1);
//   if (num1 == 20) break;
// }

let num = 0;
for (; num < 9; num++) {
  if (num == 5) break;
  console.log(num);
}

function calcf(a, b) {
  let sum = a + b;
  let prod = a * b;
  let remainder = prod / sum;
  console.log(sum);
  console.log(prod);
  console.log(remainder);
  return remainder;
}
calcf(6, 6);
