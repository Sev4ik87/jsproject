"use strict";
function Myevery(){
this.every = function(fn) {
  if (this.length === 0) {
    return false;
  }
  for (let i = this.length - 1; i >= 0; i--) {
      if (this[el] === 0) {
        return false;
      }
      if (!fn(this[i], i, this)) {
        return false;
      }
      return false;
  }
}
}

const myArr = new Array (0, 10, 20);
console.log(myArr.every (el => el % 2 === 0)); 
