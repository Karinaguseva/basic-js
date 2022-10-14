const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let array = [];
  for(let i = 0; i < domains.length; i++){
      let domain = [];
      let firstArr = domains[i].split('.').reverse();
      let str = '';
      for(let j = 0 ; j < firstArr.length; j++){
          str = str + '.' + firstArr[j];
          domain.push(str);
      }
      array.push(domain);
  }
  array = array.reverse().flat();
  let result = {};
  for (let i = 0; i < array.length; ++i){
      let arrayI = array[i];
      if (result[arrayI] != undefined)
          ++result[arrayI];
      else
          result[arrayI] = 1;
  }
  return result
}

module.exports = {
  getDNSStats
};
