// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');
  
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

// // MY SOLUTION
// function reverseInt(n) {
//   const negative = n < 0;
//   const num = parseInt(n.toString().split('').reverse().join(''));
//   return (negative) ? -num : num;
// }

// // MY OTHER SOLUTION
// function reverseInt(n) {
//   return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
// }

// // SOLUTION #1
// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');

//   if (n < 0) {
//     return parseInt(reversed) * -1;
//   }
//   return parseInt(reversed);
// }

// // SOLUTION #2 - legible
// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
  
//   return parseInt(reversed) * Math.sign(n);
// }
