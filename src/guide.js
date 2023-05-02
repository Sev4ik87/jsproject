"use strict";
let m = Number(prompt("Enter a number CHMOD"));
if (Number.isNaN(m)) {
  console.log("Enter wrong number");
} else {
switch(m) {
  
  case 0:
    console.log("--- (no permissions)");
    break;
  case 1:
    console.log("--x (Execute permissions)");
    break;
  case 2:
    console.log("-w- (Write permissions)");
    break;
  case 3:
    console.log("-wx (Write Execute permissions)");
    break;
  case 4:
    console.log("r-- (Read permissions)");
    break;
  case 5:
    console.log("r-x (Read Execute permissions)");
    break;
  case 6:
    console.log("rw- (Read-Write permissions)");
    break;
  case 7:
    console.log("rwx (full permissions)");
    break;
  default:
    console.log("Error: Unknown");
}
}