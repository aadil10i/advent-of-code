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

let validCountAmt = 0;

for (let i = 0; i < input.length; ++i) {
  let full = input[i].split(' ');
  let range = full[0].split('-');
  let alpha = full[1].split(':')[0];
  let pass = full[2];

  let min = range[0];
  let max = range[1];

  let count = pass.split(alpha).length - 1;

  function validCount() {
    if (count <= max && count >= min) {
      validCountAmt++;
      console.log(
        `${alpha} appears ${count} times in ${pass} which suffices min: ${min} and max: ${max} therefor it is valid`
      );
    }
    return;
  }
  console.log(validCount());
}

console.log(`the condition is met ${validCountAmt} amount of times`);
