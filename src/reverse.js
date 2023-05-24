"use strict";

function Myreverse(){

this.reverse = function() {
  for (let i = 0, j = this.length - 1; i < j; i++, j--) {
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
}
}
const myArray = new Array (1, 2, 3, 4, 5);
console.log(myArray.reverse());
