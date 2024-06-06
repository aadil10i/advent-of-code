const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n');

module.exports = {
  input,
};

let treeCount = 0;
let column = 0;

for (let row = 0; row < input.length; row++) {
  if (input[row][column] === '#') {
    treeCount++;
  }
  column = (column + 3) % input[row].length;
}

console.log(`You would encounter ${treeCount} trees.`);
