/**
 * Calculate the total cost of the products in a shopping cart
 */

const products = [
   { name: "shampoo", price: 300, quantity: 2 },
   { name: "comb", price: 100, quantity: 3 },
   { name: "shirt", price: 700, quantity: 5 },
   { name: "pant", price: 1200, quantity: 1 },
];

function getShoppingTotal(productList) {
   let grandTotal = 0;
   for (const product of productList) {
      const productPrice = product.price;
      const productQuantity = product.quantity;
      const totalValue = productPrice * productQuantity;
      grandTotal = grandTotal + totalValue;
   }
   return grandTotal;
}

const shoppingTotal = getShoppingTotal(products);
console.log(shoppingTotal);
