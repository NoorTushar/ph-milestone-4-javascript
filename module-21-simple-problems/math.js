// Math.min()
// Math.max()
// Math.PI()
// Math.abs() -> absolute
// Math.round()
// Math.ceil()
// Math.floor()
// Math.random()

/**
 * Create a function to generate random number from 20-30
 */

function generateRandom() {
   let random = 20 + Math.floor(Math.random() * 11);
   return random;
}

const randomNumber = generateRandom();
console.log(randomNumber);
