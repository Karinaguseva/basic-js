const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if((typeof(members) != 'object')
  || (members === null)
  || (Array.isArray(members) == false)){
     return false
  }
  let newArray = members.filter(n => typeof n === 'string')
  let string = newArray.toString()
  if (string == ''){
     return false
   }
  let str = string.replace(/ +/g, '').trim();
  let firstLetter = str.match(/\b(\w)/g);
  let word = firstLetter.join('').toUpperCase()
  let nameTeam = word.split('').sort().join('')
  return nameTeam
} 

module.exports = {
  createDreamTeam
};
