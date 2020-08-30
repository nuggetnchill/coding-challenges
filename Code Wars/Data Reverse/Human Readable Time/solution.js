// You can test with these:
// const seconds = 86399;  //answer 23:59:59
// const seconds = 359999; //answer 99:59:59

function humanReadable(seconds) {
  let hr = 0;
  let min = 0;
  let sec = 0;

  for (let i = seconds; i > 0; i--) {
    //reverse loop that count down the input(seconds)
    sec++; //sec act as a counter
    if (sec === 60) {
      min++; //logic for every 60 sec is a min
      sec -= 60;
      if (min === 60) {
        hr++; //and samething here every 60 min is an hr
        min -= 60;
      }
    }
  }

  const hour = hr.toString().padStart(2, "0");
  const minute = min.toString().padStart(2, "0");
  const second = sec.toString().padStart(2, "0");
  const result = `${hour}:${minute}:${second}`;

  console.log(result);

  return result; // and boom!
}
