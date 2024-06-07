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

let treeCount1 = 0;
let treeCount2 = 0;
let treeCount3 = 0;
let treeCount4 = 0;
let treeCount5 = 0;

// right 3 , down 1
for (let row = 0, column = 0; row < input.length; row++) {
  if (input[row][column] === '#') {
    treeCount1++;
  }
  column = (column + 3) % input[row].length;
}

console.log(`You would encounter ${treeCount1} trees.`);

// right 1, down 1
for (let row = 0, column = 0; row < input.length; row++) {
  if (input[row][column] === '#') {
    treeCount2++;
  }
  column = (column + 1) % input[row].length;
}

console.log(`you would encounter ${treeCount2} on the second slope`);

// right 5, down 1
for (let row = 0, column = 0; row < input.length; row++) {
  if (input[row][column] === '#') {
    treeCount3++;
  }
  column = (column + 5) % input[row].length;
}

console.log(`you would encounter ${treeCount3} on the third slope`);

// right 7, down 1
for (let row = 0, column = 0; row < input.length; row++) {
  if (input[row][column] === '#') {
    treeCount4++;
  }
  column = (column + 7) % input[row].length;
}

console.log(`you would encounter ${treeCount4} on the fourth slope`);

// right 1, down 2
for (let row = 0, column = 0; row < input.length; row += 2) {
  if (input[row][column] === '#') {
    treeCount5++;
  }
  column = (column + 1) % input[row].length;
}

console.log(`you would encounter ${treeCount5} on the fifth slope`);

console.log(
  `the product of trees found in each slope is ${
    treeCount1 * treeCount2 * treeCount3 * treeCount4 * treeCount5
  }`
);
