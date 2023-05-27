"use strict";
function MyArray(...args) {
  this.length = 0;
  for (let i = 0; i < args.length; i++) {
    this.push(args[i]);
  }
  return this;
}
MyArray.prototype = new MyEvery();


function MyEvery(){

  this.push = function (...args) {
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        this[this.length++] = args[i];
      }
    }
    return this.length;
  }

this.every = function(fn) {
  if (this.length === 0) {
    return false;
  }
  for (let i = this.length - 1; i >= 0; i--) {
      if (this[i] === 0) {
        return false;
      }
      if (!fn(this[i], i, this)) {
        return false;
      }
  }
  return true;
}
}

const myArr = new MyEvery(10, 20, 30);
console.log(myArr.every(el => el % 2 === 0));