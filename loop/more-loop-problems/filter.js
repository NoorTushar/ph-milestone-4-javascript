const purchaseHistory = [100, 300, 500, 150, 125];

// we want to filter amounts less or equal to 200

const filteredAmounts = [];

for (i = 0; i < purchaseHistory.length; i++) {
   const currentElement = purchaseHistory[i];
   if (currentElement <= 200) {
      filteredAmounts.push(currentElement);
   }
}
console.log(filteredAmounts);

// using filter() function

const filteredUsingFunction = purchaseHistory.filter((currentElement) => {
   if (currentElement <= 200) {
      return currentElement;
   }
});

console.log(filteredUsingFunction);

// we want to give 10% discount to customers buying equal or more than $200
const discountedPrice = [];

for (i = 0; i < purchaseHistory.length; i++) {
   const currentElement = purchaseHistory[i];
   if (currentElement >= 200) {
      discountedPrice.push(currentElement - currentElement * 0.1);
   } else {
      discountedPrice.push(currentElement);
   }
}

console.log(`discounted`, discountedPrice);
