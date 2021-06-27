/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
*/

function rot13(str) {
    var arr = []
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
        arr.push(String.fromCharCode(str.charCodeAt(i) + 13))
      } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
        arr.push(String.fromCharCode(str.charCodeAt(i) - 13))
      } else {
        arr.push(str[i])
      }
    }
    return arr.join("")
  }