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

function countCommonLetters(group) {
  const lines = group.split('\n');
  if (lines.length === 1) {
    // Single line: Calculate unique letters
    return countUnique(group);
  } else {
    // Multiple lines: Find common letters
    const commonLetters = new Set(lines[0]);
    for (let i = 1; i < lines.length; i++) {
      const lineLetters = new Set(lines[i]);
      commonLetters.forEach((letter) => {
        if (!lineLetters.has(letter)) {
          commonLetters.delete(letter);
        }
      });
    }
    return commonLetters.size;
  }
}

function findAnswers(input) {
  const groups = input.split('\n\n');
  let totalSum = 0;

  for (let group of groups) {
    const commonCount = countCommonLetters(group);
    totalSum += commonCount;
  }

  console.log('Total sum of common answers:', totalSum);
}

findAnswers(input);
