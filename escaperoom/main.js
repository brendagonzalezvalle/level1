const readlineSync = require('readline-sync');
 
const userName = readlineSync.question('What is your name? ');
console.log('Hi ' + userName + '!');
console.log("Welcome you will be playing a game!");
console.log ("The point of this game is to figure out how to escape this room you were put in!")
// const gameOptions = readlineSync.keyIn("Choose from the following 1. Put hand in hole, 2. Find the key, or, 3. Open the door: 1, 2, 3? ")
// console.log(typeof gameOptions)
const hole = "You put your hand in the hole! & you have died. Try again"
const keyMessage = "You have a Key! Pick what you would like to do next?"
const door = "Congratulations you have opened the door! & Have escaped the room"




let key = false

while (true){
   
    const gameOptions = readlineSync.keyIn("Choose from the following 1. Put hand in hole, 2. Find the key, or, 3. Open the door: 1, 2, 3? ")

    if(gameOptions === "1"){
        console.log(hole)
        
    }
    if(gameOptions === "2"){
        console.log(keyMessage)
        key = true
        
     
    }
    if (gameOptions === "3"){
        if (key){
            
            console.log(door)
            break

        } else {
            console.log("The door can't be opened yet it is locked!" + gameOptions)
        }
        
    }
    
}