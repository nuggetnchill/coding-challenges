function solve(s) {
  let consonant = ["a", "e", "i", "o", "u"];
  let array = s.split("");
  let filtered = [];
  let comparing = [];

  array.filter((e) => {
    if (!consonant.includes(e)) {
      filtered.push(e);
    } else {
      e = " ";
      filtered.push(e);
    }
  });
  let transformArray = filtered.join("").split(" ");

  let numbers = transformArray.map((e) => {
    let sum = 0;
    for (letter of e) {
      sum += letter.replace(letter, hash[letter]) * 1;
    }
    comparing.push(sum);
  });

  return Math.max(...comparing);
}
let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let hash = new Map();
alphabet.map((e) => {
  hash[e] = alphabet.indexOf(e) + 1;
});
