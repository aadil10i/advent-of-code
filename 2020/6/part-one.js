const path = require('path');
const fs = require('fs');
const { totalmem } = require('os');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n');

module.exports = {
  input,
};

console.log(input);
