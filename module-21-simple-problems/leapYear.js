// condition for leap year

/**
 * 1. Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100
 * 2. However, if a year is divisible by 400, then it is still considered a leap year
 **/

/**
 * Case 1: 2000 - leap year
 * Case 2: 1600 - leap year
 * Case 3: 1700 - not leap year
 * Case 4: 1800 - not leap year
 * Case 5: 1900 - not leap year
 **/

function isLeapYear(year) {
   if (year % 100 !== 0 && year % 4 === 0) {
      return true;
   } else if (year % 400 === 0) {
      return true;
   } else {
      return false;
   }
}

console.log(isLeapYear(2000));
console.log(isLeapYear(1600));
console.log(isLeapYear(1700));
console.log(isLeapYear(1800));
console.log(isLeapYear(1900));
