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
      if (passportData['byr'] < 1920 || passportData['byr'] > 2002)
        isValid = false;
      if (passportData['iyr'] < 2010 || passportData['iyr'] > 2020)
        isValid = false;
      if (passportData['eyr'] < 2020 || passportData['eyr'] > 2030)
        isValid = false;
      if (passportData.hasOwnProperty('hgt')) {
        let hgtValue = parseInt(passportData['hgt']);
        let hgtUnit = passportData['hgt'].replace(hgtValue, '');

        if (hgtUnit === 'cm') {
          if (hgtValue < 150 || hgtValue > 193) isValid = false;
        } else if (hgtUnit === 'in') {
          if (hgtValue < 59 || hgtValue > 76) isValid = false;
        } else {
          isValid = false;
        }
      }
      if (passportData.hasOwnProperty('hcl')) {
        const hclRegex = /^#[0-9a-f]{6}$/;
        if (!hclRegex.test(passportData['hcl'])) isValid = false;
      }
      if (
        passportData['ecl'] != 'amb' &&
        passportData['ecl'] != 'blu' &&
        passportData['ecl'] != 'brn' &&
        passportData['ecl'] != 'gry' &&
        passportData['ecl'] != 'grn' &&
        passportData['ecl'] != 'hzl' &&
        passportData['ecl'] != 'oth'
      ) {
        isValid = false;
      }
      if (passportData.hasOwnProperty('pid')) {
        const pidRegex = /^\d{9}$/;
        if (!pidRegex.test(passportData['pid'])) isValid = false;
      }
    }
    if (isValid) {
      validPassports++;
    }
  }
  return validPassports;
}

console.log(`There are ${checkValid()} valid passports.`);
