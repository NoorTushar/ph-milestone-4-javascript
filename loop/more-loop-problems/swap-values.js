let numbers = [2, 4, 5, 7, 19, 23];

let num1 = numbers[4];

numbers[4] = numbers[1];

numbers[1] = num1;

console.log(numbers);
