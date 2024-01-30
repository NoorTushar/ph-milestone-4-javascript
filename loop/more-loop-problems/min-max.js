let numbers = [25, 2, 4, 5, 30, 7, 19, 23];

let minNumber = numbers[0];
let maxNumber = numbers[0];

for (i = 0; i < numbers.length; i++) {
   if (maxNumber < numbers[i]) {
      maxNumber = numbers[i];
   }

   if (minNumber > numbers[i]) {
      minNumber = numbers[i];
   }
}
console.log(`min number is: ${minNumber}`);
console.log(`max number is: ${maxNumber}`);
