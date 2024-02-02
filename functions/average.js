const numbers = [1, 2, 3, 4, 5, 6];

function make_avg(array) {
   let sum = 0;

   for (item of array) {
      sum = sum + item;
   }
   const length = array.length;

   const average = sum / length;

   return average;
}
const result = make_avg(numbers);
console.log(result);
