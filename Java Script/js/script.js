let humanYearsCatYearsDogYears = function (humanYears) {
  console.log(humanYears);
  let catYears =
    humanYears == 1
      ? humanYears + 15 - humanYears
      : humanYears == 2
      ? humanYears + 15 + 9 - humanYears
      : (humanYears - 2) * 4 + 24;
  let dogYears =
    humanYears == 1
      ? humanYears + 15 - humanYears
      : humanYears == 2
      ? humanYears + 15 + 9 - humanYears
      : (humanYears - 2) * 5 + 24;

  return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));
console.log(humanYearsCatYearsDogYears(20));
