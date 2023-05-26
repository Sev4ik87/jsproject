"use strict";

function MyArray2(...args) {
  this.length = args.length;
  for (let i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
}

function MyReverse() {}

MyReverse.prototype = new MyArray2;

MyReverse.prototype.reverse = function() {
  for (let i = 0, j = this.length - 1; i < j; i++, j--) {
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};

const myArr2 = new MyReverse(10, 20, 30, 40, 50);
console.log(myArr2.reverse());