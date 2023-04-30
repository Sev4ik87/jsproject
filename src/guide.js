"use strict";
let m = Number(prompt("Enter a number CHMOD"));

if (Number.isNaN(a) || a < 0) {
  console.log("Enter wrong number");
} else {
  switch (m) {
    case 0:
      console.log("---");
      break;
    case 1:
      console.log("--x");
      break;
    case 2:
      console.log("-w-");
      break;
    case 3:
      console.log("-wx");
      break;
    case 4:
      console.log("r--");
      break;
    case 5:
      console.log("r-x");
      break;
    case 6:
      console.log("rw-");
      break;
    case 7:
      console.log("rwx");
      break;
    default:
      console.log('Error: Unknown');
  }
}
