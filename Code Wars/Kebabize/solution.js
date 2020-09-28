function kebabize(str) {
  console.log(str);
  const array = str.split("");
  let replaced = "";
  const filtered = array.filter((e) => (Number.isInteger(e * 1) ? null : e));

  filtered.map((e) => {
    if (e === e.toUpperCase() && filtered.indexOf(e) == 0) {
      replaced = e.toLowerCase();
      index = filtered.indexOf(e);
      filtered.splice(index, 1, replaced);
    } else if (e === e.toUpperCase()) {
      replaced = "-" + e.toLowerCase();
      index = filtered.indexOf(e);
      filtered.splice(index, 1, replaced);
    }
  });

  return filtered.join("");
}
