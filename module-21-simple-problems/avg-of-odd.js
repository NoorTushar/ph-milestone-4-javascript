const numbers = [1, 24, 11, 23, 66, 53, 101, 2];

function avgOdd(numbers) {
   let total = 0;
   let oddNumberCount = 0;
   for (number of numbers) {
      if (number % 2 !== 0) {
         total = total + number;
         oddNumberCount++;
      }
   }
   return (avg = total / oddNumberCount);
}

console.log(avgOdd(numbers));
