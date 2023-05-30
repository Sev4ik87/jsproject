"use strict";

function MyArray2(...args) {
  this.length = 0;
  for (let i = 0; i < args.length; i++) {
    this.push(args[i]);
  }
  return this;
}


MyArray2.prototype = new MyReverse();


function MyReverse(){
this.reverse = function() {
  let left = 0;
  let right = this.length - 1;

  while (left < right) {
    [this[left], this[right]] = [this[right], this[left]];
    left++;
    right--;
  }
  return this;
}

this.push = function(...args) {
  if (args.length > 0) {
    for (let i = 0; i < args.length; i++) {
      this[this.length++] = args[i];
    }
  }
  return this.length;
}
}
const myArr2 = new MyArray2(10, 20, 30, 40, 50);
console.log(myArr2.reverse());
