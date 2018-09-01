# typosquotter

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> A NodeJS tool for generating typosquotted domains

## Installation

You can use it as nodejs module:

```sh
$ npm install --save typosquotter
```

But the package provides a basic cli features also, you can install it globally and use it from the command line everywhere:

```sh
$ npm install -g typosquotter

$ typosquotter --help
```

Or if you already have installed it locally you can run the following:

```sh
$ node node_modules/typosquotter/lib/cli --help
```

## Usage

Just call it with a hostname and it will return all the possible typosquotted domains using various techniques.

```js
const typosquotter = require('typosquotter');

console.log(typosquotter('amazon.com'));

// '𝒶mazon.com'
// '𝓪mazon.com'
// '𝛼mazon.com'
// '𝔞mazon.com'
// '𝑎mazon.com'
// '𝐚mazon.com'
// '𝜶mazon.com'
// '𝕒mazon.com'
// '𝖺mazon.com'
// '⍺mazon.com'
// ...
```

## License

MIT © [b4dnewz](https://b4dnewz.github.io/)

[npm-image]: https://badge.fury.io/js/typosquotter.svg

[npm-url]: https://npmjs.org/package/typosquotter

[travis-image]: https://travis-ci.org/b4dnewz/node-typosquotting.svg?branch=master

[travis-url]: https://travis-ci.org/b4dnewz/node-typosquotting

[coveralls-image]: https://coveralls.io/repos/b4dnewz/node-typosquotting/badge.svg

[coveralls-url]: https://coveralls.io/r/b4dnewz/node-typosquotting
