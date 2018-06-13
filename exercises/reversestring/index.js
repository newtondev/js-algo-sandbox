// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

// MY SOLUTION - (Damn I am oldskool!)
// function reverse(str) {  
//   let reversed = '';
//   for (let i = (str.length - 1); i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// // SOLUTION #1
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// SOLUTION #2
// function reverse(str) {  
//   let reversed = '';
  
//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// // SOLUTION #3 - prove that you know some advanced array functions ... reduce :)
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }
