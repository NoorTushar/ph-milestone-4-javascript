/*
Regular While Loop
==================

let num = 1;
let sum = 0;

while (num <= 10) {
   sum = sum + num;
   console.log(sum, `at num: ${num}`);
   num++;
}

console.log(sum); // 55

*/

let n = 10;
do {
   console.log(n);
   n++;
} while (n < 5);

// Specialty of do while loop is:
// Notice that the condition is not true.
// Still it will execute the program one time only
