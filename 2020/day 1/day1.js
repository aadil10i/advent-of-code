const expenses = require('./input.txt');

module.exports = function findProduct() {
  for (let i = 0; i < expenses.length; ++i) {
    for (let j = i + 1; j < expenses.length; ++j) {
      if (expenses[i] + expenses[j] === 2020) {
        console.log(
          `The two entries that sum to 2020 are ${expenses[i]} and ${expenses[j]}.`
        );
        console.log(`Their product is ${expenses[i] * expenses[j]}`);
        return;
      }
    }
  }
};
