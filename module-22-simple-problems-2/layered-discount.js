/**
 * logic:
 * First 100 items will have a price of 100 (1-100 items)
 * Next 100 items will have a price of 90 (101-200 items)
 * And afterwards any item purchased will have a price of 70 (more than 200 items)
 *
 * Example, if you buy 150 items:
 *
 * 100 items will be priced 100 and 50 items will be price 90
 *
 * Example 2, if you buy 250 items:
 * 100 items will be priced 100,
 * 100 items will be price 90,
 * and 50 items will be price 70
 */

function layeredDiscountedPrice(quantity) {
   const first100Price = 100;
   const second100Price = 90;
   const above200Price = 70;
   let total = 0;
   if (quantity > 0 && quantity <= 100) {
      total = quantity * first100Price;
   } else if (quantity > 100 && quantity <= 200) {
      const first100Total = 100 * first100Price;
      const second100Total = (quantity - 100) * second100Price;
      total = total + first100Total + second100Total;
   } else {
      const first100Total = 100 * first100Price;
      const second100Total = 100 * second100Price;
      const above200Total = (quantity - 200) * above200Price;
      total = total + first100Total + second100Total + above200Total;
   }
   return total;
}

const discountedValue = layeredDiscountedPrice(150);
console.log(discountedValue);
