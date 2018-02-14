'use strict';

const fs = require('fs');
const path = require('path');

// This extract the tld from current domain
const tldReg = /\.(\w{2,63})$/g;

module.exports = domain => {
  let tld = tldReg.exec(domain)[1];
  let strippedDomain = domain.replace(tldReg, '');
  let letters = strippedDomain.split('');
  let techniquesPath = path.join(__dirname, 'techniques');

  // Get all the techniques
  return fs.readdirSync(techniquesPath).reduce((obj, file) => {
    let name = path.basename(file, '.js');
    let func = require(path.join(techniquesPath, file));
    obj[name] = func(letters, strippedDomain, tld);
    return obj;
  }, {});
};
