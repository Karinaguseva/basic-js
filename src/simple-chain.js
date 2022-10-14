const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  array: [],
  getLength() {
      const length = this.array.length;
      return length;
  },
  addLink(value = '') {
      this.array.push(`( ${value} )`);
      return this;
  },
  removeLink(position) {
      if (this.array[position - 1] == undefined) {
          this.array = [];
          throw new Error(`You can't remove incorrect link!`);
      } else {
          this.array.splice(position - 1, 1);
          return this;
      }
  },
  reverseChain() {
      this.array.reverse();
      return this;
  },
  finishChain() {
      const separator = this.array.join('~~');
      this.array = [];
      return separator;
  }
};

module.exports = {
  chainMaker
};
