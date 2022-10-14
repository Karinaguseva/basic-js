const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indices = [];
  let elem = (-1)
  let idx = arr.indexOf(elem);
  while (idx != -1) {
      indices.push(idx);
      idx = arr.indexOf(elem, idx + 1);
  }
  let arr2 = arr.sort((a,b) => a- b)
  let arr3 = arr2.filter((num) => num !== -1)
  for (let i = 0; i < indices.length; i++){
      arr3.splice(indices[i], 0, elem)
  }
  return arr3
}

module.exports = {
  sortByHeight
};
