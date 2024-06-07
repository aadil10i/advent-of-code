// if missing field = invalid
// treat missing cid as valid
// valid = only missing cid, have all keys
// count number of valid pass, in set cid = optional

const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n\n'); // Split into passports

module.exports = {
  input,
};

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(/\s+/); // Split each passport into fields
}

// console.log(input);

const requiredKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

let validPassports = 0;

for (let passport of input) {
  let passportData = {};
  for (let field of passport) {
    let [key, value] = field.split(':');
    passportData[key] = value;
  }

  let isValid = true;
  for (let key of requiredKeys) {
    if (!passportData.hasOwnProperty(key)) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    validPassports++;
  }
}
console.log(`There are ${validPassports} valid passports.`);
