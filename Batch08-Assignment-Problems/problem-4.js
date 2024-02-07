// findAddress(obj)
/**
 * Input: {street:10, house:"15A", society:"Earth Perfect"}
 * Output: 10,15A,Earth Perfect
 *
 * Input: {street:10, society:"Earth Perfect"}
 * Output: 10,__,Earth Perfect
 *
 * Input: {street:10"}
 * Output: 10,__,__
 *
 */

function findAddress(obj) {
   let street = obj["street"];
   let house = obj["house"];
   let society = obj["society"];
   console.log(house);

   if (street === undefined) {
      street = "__";
   }

   if (house === undefined) {
      house = "__";
   }

   if (society === undefined) {
      society = "__";
   }

   return `${street},${house},${society}`;
}

console.log(
   findAddress({ street: 10, house: "15A", society: "Earth Perfect" })
);
console.log(findAddress({ street: 10, society: "Earth Perfect" }));
console.log(findAddress({ street: 10 }));
console.log(findAddress({}));
