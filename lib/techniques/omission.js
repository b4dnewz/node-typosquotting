'use strict';

const { removeCharAt } = require('../common');

module.exports = (letters, domain, tld) => {
  return Object.keys(letters).map(index => {
    index = parseInt(index, 10);
    return removeCharAt(domain, index) + '.' + tld;
  });
};
