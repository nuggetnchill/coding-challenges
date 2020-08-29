// You can run this to test
// const data =[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

function dataReverse(data) {
  let arr = [];

  while (data.length > 0) {
    const cutting = data.splice(0, 8); // Splice the first 8 digits

    arr.unshift(cutting); //this put 4 separated arrays that was created by splice()
  }

  const final = arr
    .join() // Return all the digits into 1 STRING
    .split(",") // Split them up into separate STRINGS
    .map((v) => v * 1); // Convert STRING into NUMBER

  return final;
}
