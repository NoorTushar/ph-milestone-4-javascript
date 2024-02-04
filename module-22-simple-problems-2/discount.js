/**
 * When you buy
 *
 * 1. 100 items = price is 100
 * 2. 101-200 items = price is 90
 * 3. more than 200 items = price is 70
 */

function discountedTotal(items) {
   if (items <= 100) {
      return (total = items * 100);
   } else if (items > 101 && items <= 200) {
      return (total = items * 90);
   } else {
      return (total = items * 70);
   }
}

console.log(discountedTotal(201));
