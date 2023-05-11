"use strict";
/**
 *
 * @param {number} rate1 first operator
 * @param {number} rate2 second operator
 * @param {number} result additional container
 */
function setRate(rate1, rate2) {
  let result = 0;
  if (
    !Number.isNaN(rate1) &&
    !Number.isNaN(rate2) &&
    typeof rate1 == "number" &&
    typeof rate2 == "number"
  ) {
    if (rate1 >= 0 && rate2 >= 0) {
      if (rate1 === 0) {
        return (rate1 += rate2);
      }
      if (rate1 >= rate2) {
        if (rate1 - rate2 >= 0 && rate1 - rate2 <= 2) {
          return (rate1 += 2);
        }
        if (rate1 - rate2 > 2 && rate1 - rate2 < 20) {
          return (rate1 += 1);
        }
        if (rate1 - rate2 >= 20) {
          return rate1;
        }
      } else {
        if (rate1 < rate2) {
          result += Math.round((rate2 - rate1 + 5) / 30);
          rate1 += result;
          return rate1;
        }
      }
    } else {
      console.log("Wrong rate1 or rate2");
    }
  } else {
    console.log("Plese use number type");
  }
}

let number1 = setRate(25, 23);
console.log(number1);
let number2 = setRate(5, 23);
console.log(number2);
let number3 = setRate(25, 0);
console.log(number3);
let number4 = setRate(0, 23);
console.log(number4);
let number5 = setRate(100, 23);
console.log(number5);
let number6 = setRate(-100, 23);
console.log(number6);
let number7 = setRate("go", 23);
console.log(number7);
let number8 = setRate(NaN, 23);
console.log(number8);
