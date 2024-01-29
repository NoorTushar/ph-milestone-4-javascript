let num = 1;
let sum = 0;

while (num <= 10) {
   sum = sum + num;
   console.log(sum, `at num: ${num}`);
   num++;
}

console.log(sum); // 55
