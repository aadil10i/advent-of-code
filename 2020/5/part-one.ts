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

const totalRows = 128;
const totalColumns = 8;

console.log(input[0]);

// first extract row and column characters from each boarding pass
function decodeSeat(input) {
  let rowLow = 0;
  let rowHigh = totalRows - 1;
  let colLow = 0;
  let colHigh = totalColumns - 1;

  for (let pass of input) {
    // let row = pass.substring(0, 7);
    // let column = pass.substring(7, 10);

    for (let i = 0; i < 7; i++) {
      const rowMid = Math.floor((rowLow - rowHigh) / 2);
      if (pass[i] === 'F') {
        rowHigh = rowMid;
      } else {
        rowLow = rowMid + 1;
      }
    }

    for (let i = 7; i < 10; i++) {
      const colMid = Math.floor((colLow - colHigh) / 2);
      if (pass[i] === 'L') {
        colHigh = colMid;
      } else {
        colLow = colMid + 1;
      }
    }
  }
}

decodeSeat(input);
