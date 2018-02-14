'use strict';

const { doubleCharAt } = require('../common');

module.exports = (letters, domain, tld) => {
  return Object.keys(letters).map(index => {
    return doubleCharAt(domain, index) + '.' + tld;
  });
};
