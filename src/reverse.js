"use strict";

function MyArray2(...args) {
  this.length = 0;
  for (let i = 0; i < args.length; i++) {
    this.push(args[i]);
  }
  return this;
}

function MyReverse() {}

MyArray2.prototype = new MyReverse;

MyReverse.prototype.reverse = function() {
  const tempArray = [];
  for (let i = this.length - 1; i >= 0; i--) {
    tempArray.push(this[i]);
  }

  for (let i = 0; i < this.length; i++) {
    this[i] = tempArray[i];
  }

  return this;
};

MyArray2.prototype.push = function(...args) {
  if (args.length > 0) {
    for (let i = 0; i < args.length; i++) {
      this[this.length++] = args[i];
    }
  }
  return this.length;
};

const myArr2 = new MyArray2(10, 20, 30, 40, 50);
console.log(myArr2.reverse());
