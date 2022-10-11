const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let string = n.toString().split("")
  let result
  let arr = []
  for (let i = 0; i < string.length; i++){
      let number = string.concat()
      number.splice(i, 1)
      result = +number.join("")
      arr.push(result)
  }
  return Math.max(...arr)
}

module.exports = {
  deleteDigit
};
