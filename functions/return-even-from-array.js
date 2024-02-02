// return SUM of all even numbers from an array.

const numbers = [1, 3, 4, 5, 6, 8, 16];

function addEvenOnly(arr) {
   let sum = 0;
   for (item of arr) {
      if (item % 2 === 0) {
         sum = sum + item;
      }
   }
   return sum;
}

const result = addEvenOnly(numbers);
console.log(result);
