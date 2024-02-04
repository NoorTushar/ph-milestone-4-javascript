const mobiles = [
   { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
   { name: "Xaomi", price: 18000, camera: "12mp", color: "black" },
   { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
   { name: "iPhone", price: 120000, camera: "12mp", color: "black" },
   { name: "Walton", price: 31000, camera: "12mp", color: "black" },
   { name: "HTC", price: 27000, camera: "12mp", color: "black" },
];

function getCheapestObject(array) {
   let lowestPrice = array[0];
   for (item of array) {
      if (item.price < lowestPrice.price) {
         lowestPrice = item;
      }
   }
   return lowestPrice;
}

const cheapestPhone = getCheapestObject(mobiles);
console.log(cheapestPhone);
