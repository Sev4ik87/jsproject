"use strict";
/**
 *
 * @param {number} rate1 first operator
 * @param {number} rate2 second operator
 */
function setRate(rate1, rate2) {
  let diffrate = rate1 - rate2;
  if (
    Number.isNaN(diffrate) ||
    typeof rate1 !== "number" ||
    typeof rate2 !== "number" ||
    rate1 < 0 ||
    rate2 < 0
  ) {
    return "Entered wrong rate";
  }
  if (rate1 === 0) {
    return rate2;
  }
  if (diffrate >= 0 && diffrate <= 2) {
    return (rate1 += 2);
  }

  if (diffrate > 2 && diffrate < 20) {
    return (rate1 += 1);
  }
  if (diffrate >= 20) {
    return rate1;
  }
  if (diffrate < 0) {
    return rate1 + Math.round((Math.abs(diffrate) + 5) / 3);
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
