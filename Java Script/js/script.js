function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  let mix = birds.filter((x) => !geese.includes(x));
  return mix;
}

// let gooseFilter = (a, b) => b.filter((x) => a.includes(x));

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);
console.log(
  gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
);
