"use strict";

/**
 * @param {number} targetNumber - Заданное число.
 * @returns {string|null} - Строка, описывающая получение заданного числа или сообщение об невозможности.
 * @param {number} currentNumber - Текущее число.
 * @param {string} expr - Строка, содержащая текущую комбинацию операций.
 * @param {string} expr1 - Строка, содержащая текущую комбинацию операций.
 * @param {string} expr2 - Строка, содержащая текущую комбинацию операций.
 * @param {string} expr3 - Строка, содержащая текущую комбинацию операций.
 * @param {string} expr4 - Строка, содержащая текущую комбинацию операций.
 */

function describeNumber(targetNumber) {
  if (targetNumber === 1) {
    return "1=1";
  }

  function getNumber(currentNumber, expr) {
    if (currentNumber === targetNumber) {
      return `${targetNumber}=${expr}`;
    }

    if (currentNumber > targetNumber) {
      return null;
    }

    const expr1 = getNumber(currentNumber * 3, `(${expr} * 3)`);
    if (expr1) {
      return expr1;
    }

    const expr2 = getNumber(currentNumber * 5, `(${expr} * 5)`);
    if (expr2) {
      return expr2;
    }

    const expr3 = getNumber(currentNumber + 3, `(${expr} + 3)`);
    if (expr3) {
      return expr3;
    }

    const expr4 = getNumber(currentNumber + 5, `(${expr} + 5)`);
    if (expr4) {
      return expr4;
    }

    return null;
  }

  const result = getNumber(1, "1");
  if (result) {
    return result;
  }

  return "Невозможно получить число";
}

console.log(describeNumber(1));
console.log(describeNumber(2));
console.log(describeNumber(9));
console.log(describeNumber(10));
console.log(describeNumber(13));
console.log(describeNumber(23));
console.log(describeNumber(33));
