# typosquotter

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> A NodeJS tool for generating typosquotted domains

## Installation

You can use it as nodejs module:

```
$ npm install --save typosquotter
```

But the package provides a basic cli features also, you can install it globally and use it from the command line everywhere:

```
$ npm install -g typosquotter

$ typosquotter --help
```

Or if you want to quick use it without installing it:

```
$ npx typosquotter --help
```

## Usage

The simplest usage it to call it with a hostname and it will return all the possible typosquotted domains using various techniques.

```js
const typosquotter = require('typosquotter');
const options = {}

console.log(
  typosquotter('youtube.com', options)
);

// repetition: [
//   'yyoutube.com',
//   'yooutube.com',
//   'youutube.com',
//   'youttube.com',
//   'youtuube.com',
//   'youtubbe.com',
//   'youtubee.com'
// ],
// subdomain: [
//   'y.outube.com',
//   'yo.utube.com',
//   'you.tube.com',
//   'yout.ube.com',
//   'youtu.be.com',
//   'youtub.e.com'
// ],
// switching: [
//   'oyutube.com',
//   'yuotube.com',
//   'yotuube.com',
//   'youutbe.com',
//   'youtbue.com',
//   'youtueb.com'
// ],
// tld: [
//   'youtube.ac',
//   'youtube.ad',
//   'youtube.ae',
//   ...
```

## Examples

Create typosquotted domain using all techniques:

```js
typosquotter('youtube.com')
```

Create a flatten array of typosquotted domain using all techniques:

```js
typosquotter('youtube.com', { flat: true })
```

Create typosquotted domain using a specific technique:

```js
typosquotter('youtube.com', {
  only: ['repetition']
})
```

Create typosquotted domain using all techniques but not the excluded:

```js
typosquotter('youtube.com', {
  exclude: ['tld', 'vowelswap']
})
```

---

## License

MIT © [b4dnewz](https://b4dnewz.github.io/)

[npm-image]: https://badge.fury.io/js/typosquotter.svg

[npm-url]: https://npmjs.org/package/typosquotter

[travis-image]: https://travis-ci.org/b4dnewz/node-typosquotting.svg?branch=master

[travis-url]: https://travis-ci.org/b4dnewz/node-typosquotting

[coveralls-image]: https://coveralls.io/repos/b4dnewz/node-typosquotting/badge.svg

[coveralls-url]: https://coveralls.io/r/b4dnewz/node-typosquotting
