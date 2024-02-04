// number validation

function multiply(num1, num2) {
   if (typeof num1 !== "number" || typeof num2 !== "number") {
      return "please enter a valid number";
   }
   return num1 * num2;
}

console.log(multiply(5, 6));
console.log(multiply("5", 6));
console.log(multiply(5, "6"));

// array validation

function getSecond(arr) {
   if (!Array.isArray(arr)) {
      return "please insert an array";
   }

   const second = arr[1];
   return second;
}

console.log(getSecond({ name: "Tushar" }));
console.log(getSecond(8));
console.log(getSecond([8, 12, 15]));
