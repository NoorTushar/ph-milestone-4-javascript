let numbers = [55, 6, 2, 99, 67, 23, 26];
// ascending = [2,6,23,26,55,67,99]
// descending = [99,67,55,26,23,6,2]

const asc_numbers = [...numbers].sort((a, b) => a - b);
const dsc_numbers = [...numbers].sort((a, b) => b - a);
console.log([...numbers]);
console.log(`ascending -> `, asc_numbers);
console.log(`descending -> `, dsc_numbers);
