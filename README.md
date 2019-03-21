# typosquotter

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Project License][license-image]][license-url]

> A NodeJS tool for generating typosquotted domains

Checkout the web [demo](https://b4dnewz.github.io/node-typosquotting/) with a working example.

## Installation

#### As a node module

You can use it in your scripts as a node module:

```
$ npm install --save typosquotter
```

#### As a command line tool

The package provides an executable script, you can install it globally and use it from the command line everywhere:

```
$ npm install -g typosquotter

$ typosquotter --help
```

Or if you want to quick use it without installing it:

```
$ npx typosquotter --help
```

#### From the CDN for the browser

If you want to use it in your websites or web application:

```html
<script src="https://unpkg.com/typosquotter/dist/main.js"></script>
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

## Contributing

1.  Create an issue and describe your idea
2.  Fork the project (<https://github.com/b4dnewz/node-typosquotting/fork>)
3.  Create your feature branch (`git checkout -b my-new-feature`)
4.  Commit your changes (`git commit -am 'Add some feature'`)
5.  Publish the branch (`git push origin my-new-feature`)
6.  Create a new Pull Request

---

## License

MIT © [b4dnewz](https://b4dnewz.github.io/)

[npm-image]: https://badge.fury.io/js/typosquotter.svg

[npm-url]: https://npmjs.org/package/typosquotter

[travis-image]: https://travis-ci.org/b4dnewz/node-typosquotting.svg?branch=master

[travis-url]: https://travis-ci.org/b4dnewz/node-typosquotting

[coveralls-image]: https://coveralls.io/repos/b4dnewz/node-typosquotting/badge.svg

[coveralls-url]: https://coveralls.io/r/b4dnewz/node-typosquotting

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg

[license-url]: https://github.com/b4dnewz/node-typosquotting/blob/master/LICENSE
