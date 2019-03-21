const path = require('path');

module.exports = {
  target: 'web',
  mode: 'production',
  entry: path.resolve(__dirname, 'lib/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    library: 'typosquotter',
    libraryTarget: 'umd'
  }
};
