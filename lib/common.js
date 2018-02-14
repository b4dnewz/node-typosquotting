const replaceCharAt = function(str, index, replace) {
  return str.substr(0, index) + replace + str.substr(index + 1);
};

const removeCharAt = (str, index) => {
  return str.substr(0, index) + str.substr(index + 1);
};

const doubleCharAt = function(str, index) {
  return str.slice(0, index) + str.charAt(index) + str.slice(index);
};

const addCharAt = function(str, index, insertion) {
  return str.substr(0, index) + insertion + str.substr(index);
};

const switchCharAt = function(str, index) {
  return (
    str.substr(0, index) +
    str.charAt(index + 1, 1) +
    str.substr(index, 1) +
    str.substr(index + 2)
  );
};

module.exports = {
  replaceCharAt,
  removeCharAt,
  doubleCharAt,
  addCharAt,
  switchCharAt
};
