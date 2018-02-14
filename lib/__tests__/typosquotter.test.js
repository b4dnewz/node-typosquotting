const common = require('../common.js');
const typosquotter = require('../index.js');

let result = null;

function rndAlphaNum(len) {
  return (
    Math.random()
      .toString(36)
      .substring(2, len) +
    Math.random()
      .toString(36)
      .substring(2, len)
  );
}

function fuzzyDomain(len) {
  return `${rndAlphaNum(len)}.com`;
}

describe('typosquotter', () => {
  it('exports a function', () => {
    expect(typeof typosquotter).toBe('function');
  });

  describe('String manipulation methods', () => {
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

  beforeAll(() => {
    let value = fuzzyDomain(10);
    result = typosquotter(value);
  });

  it('return an object with arrays as proprerty values', () => {
    expect(result).not.toBeNull();
    expect(typeof result).toBe('object');
    Object.keys(result).forEach(k => {
      expect(Array.isArray(result[k])).toBeTruthy();
      expect(result[k]).not.toHaveLength(0);
    });
  });
});
