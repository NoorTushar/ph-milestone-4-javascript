// write a function to find the largest word in sentence.
// example: I am learning programming to become a programmer.
// output: programming

const sentence = "I am learning programming to become a programmer";

function findLargestWord(sentence) {
   const sentenceArray = sentence.split(" ");
   let largestLength = sentenceArray[0].length;
   let largestWord = sentenceArray[0];

   for (word of sentenceArray) {
      if (word.length > largestLength) {
         largestLength = word.length;
         largestWord = word;
      }
   }

   return largestWord;
}

findLargestWord(sentence);
