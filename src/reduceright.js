"use strict";

const arrArr4 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

function myReduceRight(arr, callback, initialValue) {
  if (arr.length === 0 && initialValue === undefined) {
    throw new TypeError('Reduce of empty array');
  }

  let accumulator;
  let startingIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startingIndex = arr.length - 1;
  } else {
    accumulator = arr[arr.length - 1];
    startingIndex = arr.length - 2;
  }

  for (let i = startingIndex; i >= 0; i--) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

console.log(myReduceRight(arrArr4, (a, b) => a.concat(b)));
