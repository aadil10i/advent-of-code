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

totalRows = 128;
totalColumns = 8;

// first extract row and column characters from each boarding pass
function seatExtract(input) {
  for (let pass of input) {
    let row = pass.substring(0, 7);
    let column = pass.substring(7, 10);

    console.log('row:', row, 'column:', column);
  }
}

seatExtract(input);
