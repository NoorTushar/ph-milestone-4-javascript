// odd numbers 1 to 20

for (i = 1; i <= 20; i++) {
   if (i % 2 !== 0) {
      console.log(`it is odd ${i}`);
   }
}

// give numbers from 1 to 50 which are divisible by 5

for (let i = 1; i <= 50; i++) {
   if (i % 5 === 0) {
      console.log(`The ${i} is divisible by 5`);
   }
}

// give numbers from 1 to 50 which are divisible by 3 and 5

for (let i = 1; i <= 50; i++) {
   if (i % 5 === 0 && i % 3 === 0) {
      console.log(`The ${i} is divisible by 3 and 5`); //   15,30,45
   }
}
