const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }

  let newArr = arr.slice();
  let result = [];

  let disNext = '--discard-next'
  let disPrev = '--discard-prev' 
  let doubNext = '--double-next'
  let doubPrev = '--double-prev'

  for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === disNext) {
          delete newArr[i + 1];
          i++;
      } else if (newArr[i] === disPrev) {
          if (newArr[i - 1]) {
              result.pop();
          }
      } else if (newArr[i] === doubNext) {
          if (newArr[i + 1]) {
              result.push(newArr[i + 1]);
          }
      } else if (newArr[i] === doubPrev) {
          if (newArr[i - 1]) {
              result.push(newArr[i - 1]);
          }
      } else {
          result.push(newArr[i]);
      }
  }
  return result;
}

module.exports = {
  transform
};
