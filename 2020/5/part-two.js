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

// first extract row and column characters from each boarding pass
function decodeSeat(pass) {
  let rowLow = 0;
  let rowHigh = totalRows - 1;
  let colLow = 0;
  let colHigh = totalColumns - 1;

  for (let i = 0; i < 7; i++) {
    const rowMid = Math.floor((rowLow + rowHigh) / 2);
    if (pass[i] === 'F') {
      rowHigh = rowMid;
    } else {
      rowLow = rowMid + 1;
    }
  }
  for (let i = 7; i < 10; i++) {
    const colMid = Math.floor((colLow + colHigh) / 2);
    if (pass[i] === 'L') {
      colHigh = colMid;
    } else {
      colLow = colMid + 1;
    }
  }
  return rowLow * 8 + colLow; // Directly return the seatID
}

function findHighestSeatID(input) {
  let highestSeatId = 0;
  for (let pass of input) {
    const seatId = decodeSeat(pass);

    if (seatId > highestSeatId) {
      highestSeatId = seatId;
    }
  }
  return highestSeatId;
}

function findMySeat(input) {
  const seatIds = [];
  for (let pass of input) {
    const seatId = decodeSeat(pass);
    seatIds.push(seatId);
  }
  seatIds.sort((a, b) => a - b);
  for (let Id of seatIds) {
    console.log(Id);

    for (let i = 1; i < seatIds.length - 1; i++) {
      if (seatIds[i] !== seatIds[i - 1] + 1) {
        return seatIds[i] - 1;
      }
    }
    return null;
  }
}

const mySeatId = findMySeat(input);
console.log('my seat id is:', mySeatId);
console.log('highest seat id', findHighestSeatID(input));
