let hello = (a) =>
  a == ""
    ? "Hello, World!"
    : a == undefined
    ? "Hello, World!"
    : "Hello, " +
      a.charAt(0).toUpperCase() +
      a.toLowerCase().split("").join("").slice(1) +
      "!";

console.log(hello("johN"));
console.log(hello(""));
console.log(hello());
