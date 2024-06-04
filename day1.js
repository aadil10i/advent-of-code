const input = require('./input.txt');
const up = '(';
const down = ')';

let final_floor = input;

for (let i = 0; i < instructions; ++i) {
  if (input === up) return instructions;
}
