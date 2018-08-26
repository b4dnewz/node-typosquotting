#!/usr/bin/env node

'use strict';

/* eslint-disable no-console */

const typosquotter = require('./index')
const meow = require('meow');
const fs = require('fs');
const path = require('path');
const cli = meow(`
  typosquotter

  A NodeJS tool for generating typosquotted domains

	Usage
	  $ typosquotter <input>

	Options
    --flat, -f   Return a flat array
    --write, -w  Writes result to file
    --type, -t   Changes output format [text/json]

	Examples
	  $ typosquotter amazon.com
	  $ typosquotter -f -w -t text amazon.com
`, {
  description: false,
  flags: {
    flat: {
      type: 'boolean',
      alias: 'f',
      default: false
    },
    write: {
      type: 'boolean',
      alias: 'w',
      default: false
    },
    type: {
      type: 'string',
      alias: 't',
      default: 'json'
    }
  }
});

const result = typosquotter(cli.input[0], cli.flags);
console.log(result);

if (cli.flags.write) {
  const rndNum = Math.floor(1000 + Math.random() * 9000);
  const outputPath = path.resolve(process.cwd(), cli.flags.output || '.')
  const filename = path.join(outputPath, `${cli.input[0].toLowerCase()}_${rndNum}`)

  const cbk = err => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('\nOutput created at', filename);
  };

  switch (cli.flags.type) {
    case 'text':
      fs.writeFile(`${filename}.txt`, result.join('\n'), 'utf8', cbk);
      break;
    default:
      fs.writeFile(`${filename}.json`, JSON.stringify(result, null, 2), 'utf8', cbk);
  }
}
