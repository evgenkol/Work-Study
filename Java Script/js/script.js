let a = (a, b) => a.filter((x) => !b.includes(x));

console.log(a([5], [12]));
