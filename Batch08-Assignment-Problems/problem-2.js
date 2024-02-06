// return true or false if string 2 is included in string 1

function matchFinder(string1, string2) {
   if (typeof string1 !== "string" || typeof string2 !== "string") {
      return "Please enter a string";
   }
   const result = string1.includes(string2);

   return result;
}

console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("JavaScript", "Code"));
console.log(matchFinder("Peter Parker", "Pen"));
console.log(matchFinder("Peter Parker", "pet"));
