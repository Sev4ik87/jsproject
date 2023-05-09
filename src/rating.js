"use strict";
function setRate(rate1, rate2, win) {
  let result = 0;
  if (
    typeof rate1 == "number" &&
    typeof rate2 == "number" &&
    typeof win == "number"
  ) {
    if (rate1 >= 0 && rate2 >= 0) {
      if ((rate1 === 0 && win === 1) || (rate2 === 0 && win === 2)) {
        if (win === 1) {
          return [(rate1 += rate2), rate2];
        }
        if (win === 2) {
          return [(rate2 += rate1), rate1];
        }
      } else {
        if ((rate1 === 0 && win === 2) || (rate2 === 0 && win === 1)) {
          return [rate1, rate2];
        }
      }
      if (rate1 >= rate2 && win === 1 && rate1 !== 0) {
        if (rate1 - rate2 >= 0 && rate1 - rate2 <= 2) {
          return [(rate1 += 2), rate2];
        }
        if (rate1 - rate2 > 2 && rate1 - rate2 < 20) {
          return [(rate1 += 1), rate2];
        }
        if (rate1 - rate2 >= 20) {
          return [rate1, rate2];
        }
      } else {
        if (rate1 > rate2 && win === 2) {
          result += Math.round((rate1 - rate2 + 5) / 30);
          rate2 += result;
          return [rate2, rate1];
        }
      }
    } else {
      console.log("Wrong rate1 or rate2");
    }
  } else {
    console.log("Plese use number type");
  }
}

console.log(setRate(25, 23, 1));
console.log(setRate(25, 23, 2));
console.log(setRate(0, 23, 2));
console.log(setRate(32, 0, 2));
console.log(setRate(0, 23, 1));
console.log(setRate(0, 0, 1));
console.log(setRate(0, -23, 1));
console.log(setRate("hello", "row", 1));
console.log(setRate("hello", 34, 1));
console.log(setRate(104, 23, 1));
