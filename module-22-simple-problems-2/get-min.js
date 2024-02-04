/**
 * Get min number from an array
 */

const numbers = [5, 7, -2, 1, 2, 4, 8];

function getMin(arr) {
   let min = numbers[0];

   for (number of numbers) {
      if (number < min) {
         min = number;
      }
   }
   return min;
}

const min = getMin(numbers);
console.log(min);
