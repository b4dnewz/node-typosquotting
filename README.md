# typosquotter

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> A nodejs script for generate typosquotted domains

## Installation
```sh
$ npm install --save typosquotter
```

## Usage
Just call it with a hostname and it will return all the possible typosquotted domains using various techniques.
```js
const typosquotter = require('typosquotter');
console.log(typosquotter('amazon.com'));
```

## License
MIT © [b4dnewz](https://b4dnewz.github.io/)


[npm-image]: https://badge.fury.io/js/typosquotter.svg
[npm-url]: https://npmjs.org/package/typosquotter
[travis-image]: https://travis-ci.org/b4dnewz/node-typosquotting.svg?branch=master
[travis-url]: https://travis-ci.org/b4dnewz/node-typosquotting
[coveralls-image]: https://coveralls.io/repos/b4dnewz/node-typosquotting/badge.svg
[coveralls-url]: https://coveralls.io/r/b4dnewz/node-typosquotting
