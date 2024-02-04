// inch to feet
/**
 * 12 inch = 1 feet
 * show the output in x:feet and y:inches format
 */

function inchToFeet(inches) {
   const feet = Math.floor(inches / 12);
   const inch = inches % 12;
   console.log(feet);
   console.log(inch);
   return `Length is ${feet} feet and ${inch} inch`;
}

console.log(inchToFeet(12));
