const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let ar1 = Array.from(s1);
  let ar2 = Array.from(s2);
  let result = 0;

  for (let i = 0; i < ar1.length; i++) {
      for (let j = 0; j < ar2.length; j++) {
          if (ar1[i] == ar2[j]) {
              result++;
              ar2.splice(j, 1);
              break;
          }
      }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
