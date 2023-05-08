"use strict";
/**
 * 
 * @param {number} sonAge first operator
 * @param {number} fathAge second operator
 * @param {number} diffYear resulting year
 */
function diffage(sonAge, fathAge) {
  let diffYear=0;
  if (fathAge/sonAge===2){return console.log("0 year difference");
}
  if (fathAge - sonAge >= 15 && fathAge > 0 && sonAge > 0) {
    diffYear = fathAge - 2 * sonAge;
    console.log(diffYear);
  } else {
    console.log("Wrong number");
  }
}
diffage(25, 50);
diffage(10, 15);
diffage(10, 35);
