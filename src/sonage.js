"use strict";
/**
 * 
 * @param {number} sonAge first operator
 * @param {number} futhAge second operator
 * @param {number} diffYear resulting year
 */
function diffage(sonAge, futhAge) {
  let diffYear;
  if (futhAge - sonAge >= 15 && futhAge > 0 && sonAge > 0) {
    diffYear = futhAge - 2 * sonAge;
    console.log(diffYear);
  } else {
    console.log("Wrong number");
  }
}

diffage(10, 15);
diffage(10, 35);
