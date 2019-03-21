'use strict'

// This extract the tld from current domain
const tldReg = /\.(\w{2,63})$/g

// Typosquotting techniques
const techniques = require('./techniques')

/**
 * Typosquotter uses various techniques to generate
 * domain names based on the given input
 * @param  {String} domain    The domain name input
 * @param  {Object} [opts={}] An object of possible options
 * @return {Object|Array}     The generated domain names
 */
module.exports = (domain, opts = {}) => {
  if (!domain || domain === '') {
    throw new Error('The domain name is required.')
  }

  const tld = tldReg.exec(domain)[1]
  const strippedDomain = domain.replace(tldReg, '')
  const letters = strippedDomain.split('')

  const only = (opts.only && Array.isArray(opts.only)) ? opts.only : false
  const exclude = (opts.exclude && Array.isArray(opts.exclude)) ? opts.exclude : false

  let result = {}
  for (const technique in techniques) {
    if (techniques.hasOwnProperty(technique)) {
      if (exclude && exclude.includes(technique)) {
        continue
      }
      if (only && only.includes(technique) === false) {
        continue
      }
      result[technique] = techniques[technique](letters, strippedDomain, tld)
    }
  }

  if (opts.flat) {
    result = [].concat.apply([], Object.values(result))
  }

  return result
}

module.exports.techniques = Object.keys(techniques)
