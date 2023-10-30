const readlineSync = require("readline-sync")

const namePicked = ["Mario", "Luigi"]

// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = ""
        this.totalCoins = 0
        this.status = "Small"
        this.hasStar = false
        
    }
    setName(){
      
        const names = readlineSync.keyInSelect(namePicked)
        if(names === 0) {
            this.name = "Mario"
           
        } else if(names === 1) {
            this.name = "Luigi"
           
        }
        
    }

    gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big"
            
        }
        else if (this.status === "Big"){
            this.status = "Powered Up"
            // this.hasStar = true
            // console.log("You have a star!")
            
          
            
        } else if( this.status === "Powered Up") {
            this.hasStar = true
            console.log("You have gained a star!")
        }
        
    }
    
    gotHit(){
        
        if(this.status === "Powered Up"){
            this.status = "Big"
            
            
        } else if (this.status === "Big"){
            this.status = "Small"
            
            
            
            
        } else if (this.status === "Small"){
            this.status = "Dead"
            console.log("You have Died! Game Over")
            clearInterval(gameRun)
            
        } else if (this.status === "Powered Up" && this.hasStar){
            this.hasStar = false;
        }
        
    }
    
    print() {
        console.log({
            Name: this.name,
            Total_Coins: this.totalCoins,
            Status: this.status,
            HasStar: this.hasStar
            
            
        })
    }
    
    addCoin(){
        this.totalCoins ++
        console.log(`${this.name} has added a coin to your Total Coins!`)
        
    }
}



const character = new Player()
character.setName()
character.gotPowerup()

const gameRun = setInterval(() => {
    character.print()
    let outcome = Math.floor(Math.random()* 3)
    if(outcome === 0){
        character.gotHit()

    } else if (outcome === 1){
        character.gotPowerup()

    } else if (outcome === 2){
        character.addCoin()

    }
}, 1000)




