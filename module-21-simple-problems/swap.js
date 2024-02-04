/**
 * swap between two variables
 */

let a = 10;
let b = 20;

let c = a;

a = b;
b = c;

console.log(a);
console.log(b);

/**
 * using destructuring method
 */

let x = 44;
let y = 88;

[x, y] = [y, x];
console.log(x);
console.log(y);
