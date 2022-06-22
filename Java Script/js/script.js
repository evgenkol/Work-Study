let well = (x) =>
  x.filter((a) => a == "good").length == 0
    ? "Fail!"
    : x.filter((a) => a == "good").length <= 2
    ? "Publish!"
    : "I smell a series!";

console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
);
console.log(well(["bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad"]));
