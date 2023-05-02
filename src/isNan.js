"use strict";
switch (isNaN(x) || parseInt(x)) {
  case true:
    console.log("IsNaN!");
    break;
  case 1:
    console.log("1");
    break;
  default:
    console.log("default");
    break;
}

switch (x) {
  case !isNaN(x) || x:
    console.log("IsNaN!");
    break;
  case 1:
    console.log("1");
    break;

  default:
    console.log("default");
    break;
}
