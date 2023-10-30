// For this exercise, you will be implementing a Caeser cipher using Javascript. Your program will receive two inputs:

// 1. The text to be encoded
// 2. The number positions to shift each letter (to the right)

// You only have to shift letters that are part of the 26-letter alphabet. Any other characters (such as spaces) should be printed as they were received. The shift value will always be on the interval [0, 26].




var readline = require('readline-sync');
var firstInput = readline.question('What phrase would you like to encrypt? ').toLowerCase();

console.log(firstInput)

var shiftValue = parseInt(readline.question('How many letters would you like to shift? '));
console.log(shiftValue)

const letters =  "abcdefghijklmnopqrstuvwxyz"
   
   

console.log(letters)
  

function cipherRun (){
    return firstInput.split("")
    .map(function(items){
        const letterIndex = letters.indexOf(items) // grabbin index of firstInput
        console.log(letterIndex)
        const totalSum = letterIndex + shiftValue // adding index + number to shift that user wanted
        // console.log(totalSum)
        if(totalSum > 25){
            return letters[totalSum -26]
        }
        return letters[totalSum]
    })
    .join("")
}
console.log(cipherRun(firstInput))