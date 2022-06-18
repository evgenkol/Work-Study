// function betterThanAverage(classPoints, yourPoints) {
//   let classAverage = classPoints.reduce((a, b) => a + b, 0);
//   console.log(classAverage);

//   yourPoints > classAverage ? true : false;
// }

let betterThanAverage = (classPoints, yourPoints) =>
  yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;

// console.log(yourPoints);
// console.log(classPoints);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 88));
