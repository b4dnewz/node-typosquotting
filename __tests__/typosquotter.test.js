const fs = require('fs');
const path = require('path');
const common = require('../lib/common.js');
const typosquotter = require('../lib/index.js');

function rndAlphaNum(len) {
  let str = '';
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < len; i++) {
    str += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return str;
}

function fuzzyDomain(len) {
  return `${rndAlphaNum(len)}.com`;
}

let result = null;
let value = fuzzyDomain(10);
let techniquesPath = path.join(__dirname, '../lib/techniques');

describe('typosquotter', () => {
  it('exports a function', () => {
    expect(typeof typosquotter).toBe('function');
  });

  it('takes one required argument', () => {
    expect(typosquotter.length).toBe(1);
  });

  it('throw if no argument', () => {
    expect(() => {
      typosquotter()
    }).toThrow();
  });

  describe('options', () => {
    it('flat: return a flat array', () => {
      const result = typosquotter('ebay.it', {flat: true});
      expect(Array.isArray(result)).toBeTruthy();
    })

    it('only: specify techniques to run', () => {
      const result = typosquotter('ebay.it', {
        only: ['vowelswap']
      });
      expect(result.vowelswap).toBeDefined();
      expect(result.omission).toBeUndefined();
      expect(result.repetition).toBeUndefined();
    })

    it('exclude: specify techniques to exclude', () => {
      const result = typosquotter('ebay.it', {
        exclude: ['vowelswap']
      });
      expect(result.vowelswap).toBeUndefined();
      expect(result.omission).toBeDefined();
      expect(result.repetition).toBeDefined();
    })
  });

  describe(`Fuzzy testing with ${value}`, () => {
    beforeAll(() => {
      result = typosquotter(value);
    });

    it('returns an object', () => {
      expect(result).not.toBeNull();
      expect(typeof result).toBe('object');
      Object.keys(result).forEach(k => {
        expect(Array.isArray(result[k])).toBeTruthy();
      });
    });

    fs.readdirSync(techniquesPath).forEach(file => {
      let name = path.basename(file, '.js');
      if (name === 'index') {
        return;
      }

      it(`has a ${name} property`, () => {
        expect(result).toHaveProperty(name);
        expect(Array.isArray(result[name])).toBeTruthy();
      });
    });
  });
});

describe('typosquotter:utils', () => {
  it('switch the characters by index', () => {
    expect(common.switchCharAt('example', 2)).toEqual('exmaple');
  });

  it('duplicate the characters by index', () => {
    expect(common.doubleCharAt('example', 2)).toEqual('exaample');
  });

  it('add a character at index', () => {
    expect(common.addCharAt('example', 2, 'b')).toEqual('exbample');
  });

  it('remove a character at index', () => {
    expect(common.removeCharAt('example', 2)).toEqual('exmple');
  });

  it('replace a character at index', () => {
    expect(common.replaceCharAt('example', 2, 'b')).toEqual('exbmple');
  });
});
