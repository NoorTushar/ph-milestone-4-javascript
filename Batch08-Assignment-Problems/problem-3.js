/**
 * Input ------ Output
 * [2,3] ------ [3,2]
 * [4,2] ------ [4,2]
 * [4,4] ------ equal
 * [1,2] ------ [2,1]
 * [4,-2] ------ Invalid Input
 */

function sortMaker(arr) {
   const num1 = arr[0];
   const num2 = arr[1];

   const sortedArray = [];
   if (num1 < 0 || num2 < 0) {
      return "Invalid Input";
   } else if (num1 === num2) {
      return "Equal";
   } else if (num1 > num2) {
      sortedArray[0] = num1;
      sortedArray[1] = num2;
   } else {
      sortedArray[0] = num2;
      sortedArray[1] = num1;
   }

   return sortedArray;
}

console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4, -2]));
console.log(sortMaker([4, 0]));
