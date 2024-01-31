const laptop = {
   name: "macbook",
   version: "a1",
   memory: 256,
   color: "silver",
};

delete laptop.color;
console.log(laptop);
// for in loop

for (const prop in laptop) {
   console.log(prop);
   console.log(laptop[prop]);
}

// using Object.keys()

const keys = Object.keys(laptop);
console.log(keys);

for (let key of keys) {
   console.log(laptop[key]);
}
let str = "Mississippi";
console.log(str.indexOf("i", 3));
