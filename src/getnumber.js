'use strict';
/**
 * @param {number} targetNumber - Заданное число
 * @returns {string} -  сообщение об невозможности.
 */
function getNumber(targetNumber) {
  if (targetNumber === 1) {
    return "1";
  }

  if (targetNumber % 3 === 0) {
    const expression = getNumber(targetNumber / 3);
    if (expression !== "Impossible") {
      return `(${expression} * 3)`;
    }
  }

  if (targetNumber >= 5) {
    const expression = getNumber(targetNumber - 5);
    if (expression !== "Impossible") {
      return `(${expression} + 5)`;
    }
  }

  return "Impossible";
}


console.log(getNumber(13)); 
console.log(getNumber(22)); 
console.log(getNumber(23)); 




