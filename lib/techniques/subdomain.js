'use strict';

const { addCharAt } = require('../common');

module.exports = (letters, domain, tld) => {
  let arr = [];
  for (var i = 1; i < letters.length; i++) {
    arr.push(`${addCharAt(domain, i, '.')}.${tld}`);
  }
  return arr;
};
