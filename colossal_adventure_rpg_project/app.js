// Tips focus on: 1. write functions for actions that happen, 2 life span the players health points. "Enemy array variable array of objects"



let player = {
    defeated: false,
    hp: 100, 
    inventory: []
}

let enemies = [ 
    {
        name: "Enemy 1 who is a Bat monster",
        hp: "30",
        attack: "10", 
        loot: 'apple watch'
    },
    {
        name: "Enemy 2 who is a quiet Snake",
        hp: "50",
        attack: "20",
        loot: 'gold'
    },
    {
        name: " Enemy 3 who is a crazy BIG Bear",
        hp: "20",
        attack: "80",
        loot: 'candy'
    }
]



// Keep this line of code:  Intro/ stores name/ while loop

const readlineSync = require("readline-sync")
readlineSync.keyInPause("Hi Welcome! Let's play a game today!! Wohooo!")
console.clear()
readlineSync.keyInPause("The game and goal is very simple. You need to dodge and beat anyone or anything that gets in your path as you try and go through this tunnel to make it to the other side. You can also win rewards & you will be able to view them when prompted to view your stats. Good Luck!")
console.clear()

const userName = readlineSync.question(" Let's get started! What is your name? ")

console.log("Great thank you " + userName + "!")

let progress = 0
while (true) {
    walk()
}

// *****Creating functions********************************************
 
// Global function can use in code below to help with pulling a random number within a certain range i choose
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min)
} 

// ${} inserts variable in a string similar to using the  +: String Interpolation/Template literals
function walk() {
    let key = readlineSync.keyIn(`You have made it to ${progress} miles!! To ${progress > 0 ? 'continue walking,' : 'walk,'} press(w)! If you would like to print your stats, press (p). `) // Hanging

    if (key === 'p') {
        console.log('Here are your stats: ')
        console.log(`Your health is ${player.hp} out of 100!`)

        console.log('and here are your reward items: ')
        if (!player.inventory.length) {
            console.log('There is nothing in your inventory')
        } else {
            player.inventory.forEach((item) => {
                console.log(item)
            })
        }

        readlineSync.keyInPause()
        console.clear()
    }   
    if (key === 'w') {
        let chance = randomNumber(1, 4)
        if (chance === 1) {

            attackQuestion()
            
            function attackQuestion() {
                let playersChoice = readlineSync.keyIn("You are being attacked would you like to run (r) or attack (a)?")

                if (playersChoice === "a"){
                    attack()
                } else if (playersChoice === "r" ){
                    run()
                } else if (playersChoice !== "a" || "r"){
                    console.log("You must press the key (a) or (r)")
                    return attackQuestion()
                }
            }
    } else {
        console.log(`Hi!  ${userName}, You are rocking it so far don't give up! `)
        progress += 1
    }
}
    if (!enemies.length) winGame()  
    // if (enemies.length === 0) {
    //     winGame()
    // }
    if (player.hp < 0) endGame()
}

function run() {
    let escape = randomNumber(0, 2) 
    if (escape === 0) return playerEscapes() // recurse (return to the top of a function)
    else if (escape !== 0) {
        attack()
        readlineSync.keyInPause("The enemy is running")
}    }

function playerEscapes(){
    readlineSync.keyInPause("You have escaped!! Nice job you are a fast runner!")
}

function attack() {
    let index = randomNumber(0, enemies.length)
    console.log(`You are being attacked by: ${enemies[index].name}`)

    readlineSync.keyInPause("You got ahead of the game and set a trap that hit the Enemy WAY TO GO!!") // pause

    let enemyDamage = randomNumber(1, 51)
    enemies[index].hp -= enemyDamage

    console.log(`The enemy's health went down by ${enemyDamage}`)
    

    if (enemies[index].hp > 1) {
        readlineSync.keyInPause('but the enemy is still alive, so you did not win any rewards!!')
    }

    if (enemies[index].hp <= 0) {
        player.inventory.push(enemies[index].loot)
        player.hp += randomNumber(1, 20)
        console.log(` ${enemies[index].name} has been killed`)
        enemies.pop(index)

    }

    let playerDamage = randomNumber(1, 2)
    readlineSync.keyInPause(`Ouch the enemy has hit you back and your health points went down by  ${playerDamage}`)
    player.hp -= playerDamage

    if (player.hp > 0) {
        readlineSync.keyInPause('You are still alive! Keep walking, you got this!')
    }

}
    
function endGame() {
    console.log('Oh no you have been damaged too much and lost all your points! You lost and game has ended.')
    process.exit(0)
}

function winGame() {
    console.log('you won')
    process.exit(0)
}


