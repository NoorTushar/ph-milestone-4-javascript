/*
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/

/********** Task 4 **********/

const statement = "I am a hard working person";

// first covert the whole string into an array
const statement_array = statement.split(" ");

// second create an empty array and reverse it.
const reversed_statement_array = [];

for (const word of statement_array) {
   reversed_statement_array.unshift(word);
}

// third convert the reversed array back to a string with
// whitespace in between

const reversed_statement = reversed_statement_array.join(" ");

console.log(reversed_statement);
