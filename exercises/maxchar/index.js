// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const result = {};
  let ch;
  let max = 0;
  for (let char of str) {
    char = char.toString();
    result[char] = result[char] + 1 || 1;

    if (result[char] > max) {
      max = result[char];
      ch = char;
    }
  }

  return ch;
}

module.exports = maxChar;

// // MY SOLUTION
// function maxChar(str) {
//   const result = {};
//   let ch;
//   let max = 0;
//   for (let char of str) {
//     char = char.toString();
//     result[char] = result[char] + 1 || 1;

//     if (result[char] > max) {
//       max = result[char];
//       ch = char;
//     }
//   }

//   return ch;
// }


// // SOLUTION #1
// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';
  
//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }    
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }
