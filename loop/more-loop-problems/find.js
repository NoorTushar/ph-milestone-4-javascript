// find if a specific value exists

const fruits = ["apple", "banana", "strawberry", "orange"];

const target = "strawberry";
let foundIndex = -1;

for (i = 0; i < fruits.length; i++) {
   if (fruits[i] === target) {
      foundIndex = i;
   }
}

if (foundIndex > -1) {
   console.log(`item found at index: ${foundIndex}`);
} else {
   console.log(`item was not found`);
}
