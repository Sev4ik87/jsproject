'use strict';
function palindrome(str) {
  return str.toLowerCase().split('').reverse().join('') == str.toLowerCase();
}
console.log(palindrome('hello'));
console.log(palindrome('cat')); 
console.log(palindrome('Orro')); 
console.log(palindrome('')); 
console.log(palindrome('Ebe')); 