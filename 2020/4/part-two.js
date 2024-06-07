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
  checkValid,
};

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(/\s+/); // Split each passport into fields
}

// Rules
// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.
// cid (Country ID) - ignored, missing or not.

const requiredKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
let validPassports = 0;

function checkValid() {
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
}

console.log(checkValid());
console.log(`There are ${validPassports} valid passports.`);
