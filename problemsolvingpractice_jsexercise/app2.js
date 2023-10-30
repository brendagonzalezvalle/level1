// 2. Write a function that takes an array of words and a character and returns each word that has that character present.
// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") 

// => ["C%4!", "Hey!"]
const character = ["#3", "$$$", "C%4!", "Hey!"]
const test = character.filter(character => character.includes("!"))

console.log(test)


// const lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"]
// const result = lettersWithStrings.filter(checkExclamation);

// function checkExclamation(lettersWithStrings) {
//   return lettersWithStrings == "!";
// }
// console.log(result)
