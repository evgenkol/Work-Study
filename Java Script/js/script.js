// let arrLove = [
//   "I love you",
//   "a little",
//   "a lot",
//   "passionately",
//   "madly",
//   "not at all",
// ];

function howMuchILoveYou(nbPetals) {
  let arrLove = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  return arrLove[(nbPetals - 1) % arrLove.length];
}

console.log(howMuchILoveYou(6));
