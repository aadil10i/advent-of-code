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

console.log(input);

for (let i = 0; i < input.length; ++i) {
  for (let j = i + 1; j < input.length; ++j) {
    if (input[i] + input[j] === 2020) {
      console.log(
        `The two entries that sum to 2020 are ${input[i]} and ${input[j]}.`
      );
      console.log(`Their product is ${input[i] * input[j]}`);
      return;
    }
  }
}
