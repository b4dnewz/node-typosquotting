#!/usr/bin/env node


const fs = require('fs')
const path = require('path')
const {inspect} = require('util')
const meow = require('meow')
const typosquotter = require('./index')
const {name, version, description} = require('../package.json')

const cli = meow(`
  ${name} v${version}

  ${description}

	Usage
	  $ typosquotter <input>

	Options
    --only, -o      Run only the selected techniques
    --exclude, -e   Exclude the selected techniques
    --flat, -f      Return a flat array
    --write, -w     Writes result to file
    --type, -t      Changes output format [text/json]

  Available Tasks
    ${typosquotter.techniques.join('\n    ')}

	Examples
	  $ typosquotter amazon.com
	  $ typosquotter -f -w -t text amazon.com
	  $ typosquotter -o vowelswap amazon.com
`, {
  description: false,
  flags: {
    only: {
      type: 'string',
      alias: 'o',
      multiple: true,
      default: false
    },
    exclude: {
      type: 'string',
      alias: 'e',
      multiple: true,
      default: false
    },
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
})

// FIXME: Waiting for the next release of meow where hopefullyù
// this https://github.com/sindresorhus/meow/pull/112 PR
// get merged into master
if (cli.flags.only) {
  cli.flags.only = Array.isArray(cli.flags.only) ?
    cli.flags.only : [cli.flags.only]
}

if (cli.flags.exclude) {
  cli.flags.exclude = Array.isArray(cli.flags.exclude) ?
    cli.flags.exclude : [cli.flags.exclude]
}

const result = typosquotter(cli.input[0], cli.flags)

if (cli.flags.write) {
  const rndNum = Math.floor(1000 + Math.random() * 9000)
  const outputPath = path.resolve(process.cwd(), cli.flags.output || '.')
  const filename = path.join(outputPath, `${cli.input[0].toLowerCase()}_${rndNum}`)

  const cbk = err => {
    if (err) {
      // eslint-disable-next-line
      console.error(err)
      return
    }
    // eslint-disable-next-line
    console.log('\nOutput created at', filename)
  }
  switch (cli.flags.type) {
    case 'text':
      fs.writeFile(`${filename}.txt`, result.join('\n'), 'utf8', cbk)
      break
    default:
      fs.writeFile(`${filename}.json`, JSON.stringify(result, null, 2), 'utf8', cbk)
  }
} else {
  // eslint-disable-next-line
  console.log(inspect(result, {
    depth: null
  }))
}
