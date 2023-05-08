"use strict";
function diffage(sonAge, futhAge) {
  let diffYear;
  if (futhAge - sonAge >= 15 && futhAge > 0 && sonAge > 0) {
    diffYear = futhAge - 2 * sonAge;
    console.log(diffYear);
  } else {
    console.log("Wrong number");
  }
}
let sonAge, futhAge;

diffage(10, 15);
diffage(10, 25);
