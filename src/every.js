"use strict";

this.every = function(fn) {
  if (this.length === 0) {
    return false;
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this && !fn(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const myArr = [3, 10, 20];
console.log(myArr.every(el => el % 2 === 0)); // Выводит: false
