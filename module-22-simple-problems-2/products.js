/**
 * Calculate the total cost of the products in a shopping cart
 */

const products = [
   { name: "shampoo", price: 300 },
   { name: "comb", price: 100 },
   { name: "shirt", price: 700 },
   { name: "pant", price: 1200 },
];

function getShoppingTotal(productList) {
   let total = 0;
   for (const product of productList) {
      const productPrice = product.price;
      total = total + productPrice;
   }
   return total;
}

const shoppingTotal = getShoppingTotal(products);
console.log(shoppingTotal);
