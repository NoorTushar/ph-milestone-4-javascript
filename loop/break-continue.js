// break

for (i = 1; i < 50; i++) {
   if (i >= 11) {
      break;
   }
   console.log(i);
}

// continue

console.log(`continue`);
for (i = 1; i < 10; i++) {
   if (i % 5 === 0 || i % 3 === 0) {
      continue;
   }
   console.log(i); // 1,2,4,7,8
}
