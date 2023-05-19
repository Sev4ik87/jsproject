/**
 *
 * @param {number} targetNumber - Заданное число.
 * @returns {string} - Строка, описывающая получение заданного числа, или сообщение об невозможности.
 */
function describeNumber(targetNumber) {
  if (targetNumber === 1) {
    return '1';
  }
  
  function findExpression(currentNumber, expr) {
    if (currentNumber === targetNumber) {
      return expr;
    }
    
    if (currentNumber > targetNumber) {
      return null;
    }
    
    const expr1 = findExpression(currentNumber * 3, `(${expr} * 3)`);
    if (expr1) {
      return expr1;
    }
    
    const expr2 = findExpression(currentNumber * 5, `(${expr} * 5)`);
    if (expr2) {
      return expr2;
    }
    
    const expr3 = findExpression(currentNumber + 3, `(${expr} + 3)`);
    if (expr3) {
      return expr3;
    }
    
    const expr4 = findExpression(currentNumber + 5, `(${expr} + 5)`);
    if (expr4) {
      return expr4;
    }
    
    return null;
  }
  
  const result = findExpression(1, "1");
  if (result) {
    return result;
  }
  
  return 'Невозможно получить число';
}



console.log(describeNumber(9));
console.log(describeNumber(10));
console.log(describeNumber(13));
console.log(describeNumber(23));
console.log(describeNumber(33));




