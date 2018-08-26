'use strict';

// This extract the tld from current domain
const tldReg = /\.(\w{2,63})$/g;

// Typosquotting techniques
const techniques = require('./techniques/index');

/**
 * Typosquotter uses various techniques to generate
 * domain names based on the given input
 * @param  {String} domain    The domain name input
 * @param  {Object} [opts={}] An object of possible options
 * @return {Object|Array}     The generated domain names
 */
module.exports = (domain, opts = {}) => {
  if (!domain || domain === '') {
    // eslint-disable-next-line
    console.warn('The script require a valid domain name.');
    return
  }

  const tld = tldReg.exec(domain)[1];
  const strippedDomain = domain.replace(tldReg, '');
  const letters = strippedDomain.split('');

  let result = {}
  for (const technique in techniques) {
    if (techniques.hasOwnProperty(technique)) {
      result[technique] = techniques[technique](letters, strippedDomain, tld)
    }
  }

  if (opts.flat) {
    result = [].concat.apply([], Object.values(result));
  }

  return result;
};
