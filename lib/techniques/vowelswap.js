'use strict';

const { replaceCharAt } = require('../common');
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

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
