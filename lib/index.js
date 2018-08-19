'use strict';

// This extract the tld from current domain
const tldReg = /\.(\w{2,63})$/g;

// Typosquotting techniques
const techniques = require('./techniques/index');

module.exports = domain => {
  if (!domain || domain === '') {
    // eslint-disable-next-line
    console.warn('The script require a valid domain name.');
    return
  }

  const tld = tldReg.exec(domain)[1];
  const strippedDomain = domain.replace(tldReg, '');
  const letters = strippedDomain.split('');

  const result = {}
  for (const technique in techniques) {
    if (techniques.hasOwnProperty(technique)) {
      result[technique] = techniques[technique](letters, strippedDomain, tld)
    }
  }
  return result;
};
