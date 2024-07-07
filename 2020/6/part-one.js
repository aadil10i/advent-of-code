const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim();

module.exports = {
  input,
};

function countUnique(group) {
  const uniqueLetters = new Set(group.replace(/\n/g, '').split(''));
  return uniqueLetters.size;
}

function findAnswers(input) {
  const groups = input.split('\n\n');
  let totalSum = 0;

  for (let group of groups) {
    const uniqueCount = countUnique(group);
    totalSum += uniqueCount;
  }

  console.log('total sum of unique answers is', totalSum);
}
dd;
findAnswers(input);
