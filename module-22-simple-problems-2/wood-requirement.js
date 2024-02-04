/**
 * Find out the total wood needed for an order.
 * wood needed for:
 * 1 chair = 3 cft
 * 1 table = 10 cft
 * 1 bed = 50 cft
 */

function woodRequirement(chairQty, tableQty, bedQty) {
   const perChairWood = 3;
   const perTableWood = 10;
   const perBedWood = 50;

   const chairAmount = perChairWood * chairQty;
   const tableAmount = perTableWood * tableQty;
   const bedAmount = perBedWood * bedQty;

   const totalWoodRequirement = chairAmount + tableAmount + bedAmount;
   return totalWoodRequirement;
}

const woodNeeded = woodRequirement(10, 15, 20);
console.log(woodNeeded);
