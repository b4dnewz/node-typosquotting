'use strict';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const replaceCharAt = function(str, index, replace) {
  return str.substr(0, index) + replace + str.substr(index + 1);
};

module.exports = (letters, domain, tld) => {
  let arr = [];
  for (var i = 0; i < letters.length; i++) {
    let letter = letters[i];
    if (!vowels.includes(letter)) {
      continue;
    }
    for (var j = 0; j < vowels.length; j++) {
      let vowel = vowels[j];
      if (vowel === letter) {
        continue;
      }
      arr.push(`${replaceCharAt(domain, i, vowel)}.${tld}`);
    }
  }
  return arr;
};
