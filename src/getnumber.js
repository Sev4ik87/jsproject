/**
 * Функция для получения строки, описывающей, как получить заданное число с помощью математических операций над числом "1".
 * Разрешены только операции умножения и сложения с коэффициентами "3" и "5".
 * Искомое число передается в аргументы функции.
 *
 * @param {number} targetNumber - Заданное число.
 * @returns {string} - Строка, описывающая получение заданного числа в формате "число=выражение", или сообщение об невозможности.
 */
function describeNumber(targetNumber) {
  if (targetNumber === 1) {
    return '1=1';
  }
  
  function findExpression(currentNumber, expr) {
    if (currentNumber === targetNumber) {
      return `${targetNumber}=${expr}`;
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


console.log(describeNumber(2));
console.log(describeNumber(9));
console.log(describeNumber(10));
console.log(describeNumber(13));
console.log(describeNumber(23));
console.log(describeNumber(33));




