'use strict';

const { switchCharAt } = require('../common');

module.exports = (letters, domain, tld) => {
  return Object.keys(letters).reduce((arr, index) => {
    index = parseInt(index, 10);
    if (index === letters.length - 1) {
      return arr;
    }
    arr.push(switchCharAt(domain, index) + '.' + tld);
    return arr;
  }, []);
};
