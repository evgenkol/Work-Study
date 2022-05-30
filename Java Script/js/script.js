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

// let num = prompt("Enter Number:1-6");
// for (; num < 9; num++) {
//   if (num == 7) break;
//   console.log(num);
// }

// function calcsum(a = 2, b = 3) {
//   let sum = a + b;
//   let prod = a * b;
//   let remainder = prod + sum;
//   console.log(sum);
//   console.log(prod);
//   console.log(`Сумма функций ${remainder}`);
//   // if (remainder > 20) {
//   //   alert("Мало))");
//   // }
//   return remainder;
// }
// calcsum(6, 7);
// calcsum();
// let funcRezult = calcsum(3, 4);
// console.log(`Сумма ${funcRezult}`);

// function calcsum(numOne, numTwo, more, less) {
//   let numSum = numOne + numTwo;
//   if (numSum > 3) {
//     more();
//   } else {
//     less();
//   }
// }

// function showMoreMassage() {
//   console.log("Больше чем 3");
// }
// function showLessMassage() {
//   console.log("Меньше чем 3");
// }
// calcsum(1, 1, showMoreMassage, showLessMassage);

// function calcSum(numOne, numTwo) {
//   if (numTwo === 1) {
//     return numOne;
//   } else {
//     return numOne * calcSum(numOne, numTwo - 1);
//   }
// }
// console.log(calcSum(2, 5));

// function calcSum(numOne, numTwo) {
//   return numTwo === 1 ? numOne : numOne * calcSum(numOne, numTwo - 1);
// }
// console.log(calcSum(2, 7));

// function pow(x, n) {
//   return n == 1 ? x : x * pow(x, n - 1);
// }

// console.log(pow(2, 3));
// ----------------------------------------------------------------------------------
// let getMessage = (text, name) => {
//   let message = text + ", " + name + "!";
//   return message; //!!!!!
// };
// console.log(getMessage("Hello", "Bet"));

// let getMessage1 = (text, name) => text + ", " + name + "!";

// console.log(getMessage1("Hello", "Mike"));
// -----------------------------------------------------------------------------

function showMessage(text, name) {
  console.log(`${text}, ${name}!`);
}
setTimeout(showMessage, 3000, "Hello", "Dolly");
setTimeout(showMessage, 3000, "Hello", "Dolly");

// function showMessage(text, name) {
//   console.log(`${text}, ${name}!`);
// }
// setInterval(showMessage, 3000, "Hello", "Dolly");
