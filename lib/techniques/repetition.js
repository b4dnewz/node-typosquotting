'use strict';

const doubleCharAt = function(str, index) {
  return str.slice(0, index) + str.charAt(index) + str.slice(index);
};

module.exports = (letters, domain, tld) => {
  return Object.keys(letters).map(index => {
    return doubleCharAt(domain, index) + '.' + tld;
  });
};
