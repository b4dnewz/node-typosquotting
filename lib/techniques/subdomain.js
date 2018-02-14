'use strict';

const addCharAt = function(str, index, insertion) {
  return str.substr(0, index) + insertion + str.substr(index);
};

module.exports = (letters, domain, tld) => {
  let arr = [];
  for (var i = 1; i < letters.length; i++) {
    arr.push(`${addCharAt(domain, i, '.')}.${tld}`);
  }
  return arr;
};
