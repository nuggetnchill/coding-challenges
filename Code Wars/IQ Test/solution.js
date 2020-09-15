//TEST INPUT
// numbers = "2 4 7 8 10"
// numbers = "1 2 1 1"

function iqTest(numbers) {
  const array = numbers.split(" "); //clean up string

  //sorting out odd and even
  let odd = [];
  let even = [];

  const separate = array.map((e) => {
    if (e % 2 == 1) {
      odd.push(e);
    } else {
      even.push(e);
    }
  });

  // finding the element that is different than the rest
  let theOne = even.length > odd.length ? odd[0] : even[0];

  // return the element with index starting from 1
  return array.indexOf(theOne) + 1;
}
