const sentence = "I am learning Web Dev.";
let reversedSentence = "";

// reverse using for of Loop

// we get the first letter then add to the variable
// we get the second letter then add to the variable + old value of variable.
// this way we get the very last letter at the beginning.

for (letter of sentence) {
   reversedSentence = letter + reversedSentence;
}

console.log(reversedSentence); // .veD beW gninrael ma I

//reverse using for loop
let reversedSentence2 = "";

for (i = sentence.length - 1; i >= 0; i--) {
   reversedSentence2 = reversedSentence2 + sentence[i];
}
console.log(reversedSentence2);

// reverse using split and reverse method

let reversedSentence3 = sentence.split("").reverse().join("");
console.log(reversedSentence3);
