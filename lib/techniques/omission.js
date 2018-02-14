'use strict';

const removeCharAt = (str, index) => {
  return str.substr(0, index) + str.substr(index + 1);
};

module.exports = (letters, domain, tld) => {
  return Object.keys(letters).map(index => {
    index = parseInt(index, 10);
    return removeCharAt(domain, index) + '.' + tld;
  });
};
