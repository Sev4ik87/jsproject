"use strict";
let a = Number(prompt("Enter a number"));
let result = 0;
let number = a;
if (Number.isNaN(a) || a < 0) {
  console.log("Enter wrong number");
} else {
  while (a != 0) {
    if (a % 5 == 0) {
      result++;
    }
    a--;
  }
  console.log('Number of multiples of 5 (' + number + ')=' +result);
}
