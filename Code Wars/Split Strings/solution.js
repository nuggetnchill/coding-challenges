function solution(str) {
  const array = [];

  for (let i = 0; i < str.length; i++) {
    let first = str[i];
    let second = str[i + 1] || "_";
    array.push(`${first}${second}`);
    i++;
  }
  console.log(array);
  return array;
}
