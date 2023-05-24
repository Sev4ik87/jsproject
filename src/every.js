"use strict";

this.every = function(fn) {
  if (this.length === 0) {
    return false;
  }
  for (let i = this.length - 1; i >= 0; i--) {
      if (this[i] === 0) {
        return false; // Возвращаем false, если элемент равен 0
      }
      if (!fn(this[i], i, this)) {
        return false;
      }
    
  }
  return true;
}

const myArr = [0, 10, 20];
console.log(myArr.every(el => el % 2 === 0)); // Выводит: false
