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

// 1-3 a: abcde
// range = positions, should be in one of those positions

let validCountAmt = 0;

for (let i = 0; i < input.length; ++i) {
  let full = input[i].split(' ');
  let range = full[0].split('-');
  let alpha = full[1].split(':')[0];
  let pass = full[2];

  let firstPos = parseInt(range[0] - 1);
  let secondPos = parseInt(range[1] - 1);

  if ((pass[firstPos] === alpha) != (pass[secondPos] === alpha)) {
    validCountAmt++;
    console.log(
      `${alpha} appears in either position ${firstPos} or ${secondPos} (but not both) in ${pass} therefore making it valid`
    );
  } else
    console.log(
      `${alpha} dosen't appear in positions ${firstPos} and ${secondPos} in ${pass} therefor invalid `
    );
}

console.log(`the condition is met ${validCountAmt} amount of times`);
