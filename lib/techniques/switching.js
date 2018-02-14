'use strict';

const switchCharAt = function(str, index) {
  return (
    str.substr(0, index) +
    str.charAt(index + 1, 1) +
    str.substr(index, 1) +
    str.substr(index + 2)
  );
};

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
