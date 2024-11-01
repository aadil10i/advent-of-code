const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((num) => parseInt(num, 10));

module.exports = {
  input,
};

for (let i = 0; i < input.length; ++i) {
  for (let j = i + 1; j < input.length; ++j) {
    for (let k = j + 1; k < input.length; ++k) {
      if (input[i] + input[j] + input[k] === 2020) {
        console.log(
          `The two entries that sum to 2020 are ${input[i]} and ${input[j]} and ${input[k]}.`
        );
        console.log(
          `the product of entries are ${input[i] * input[k] * input[j]}`
        );
      }
    }
  }
}
