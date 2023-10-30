import React from "react";
import { useState } from 'react'

export default function DiceBox(props){

    const [numbers, setNumbers] = useState([1, 2, 5, 10, 3])

    const randomNumber = Math.floor(Math.random() * numbers.length)
    console.log(randomNumber)
  
    const newArray = numbers[randomNumber]
    console.log(newArray)

    function rollDice(){
    
        setNumbers(function(prevState){
          return prevState[randomNumber]
        })
        console.log("Roll dice is clicked" + newArray)
        
      }
      

    return (
        <div>
            <h1> DiceBox {numbers} </h1>
            <button onClick={rollDice}>Roll Dice!</button>
        </div>
    )
}