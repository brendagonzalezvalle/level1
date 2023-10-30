// import { useState } from 'react'
import './App.css'
import DiceBox from './DiceBox'
// import Form from './Form'

function App() {

  // const [numbers, setNumbers] = useState([1, 2, 5, 6, 3])

  // const randomNumber = Math.floor(Math.random() * numbers.length)
  // console.log(randomNumber)

  // const newArray = numbers[randomNumber]
  // console.log(newArray)

  
  // function test(){
  //   setNumbers(function(prevState){
  //     return prevState[newArray]
  //   })
    
  // }
 

  // function rollDice(){
    
  //   setNumbers(function(prevState){
  //     return prevState[randomNumber]
  //   })
  //   console.log("Roll dice is clicked" + newArray)
  // }

  return (
    <div className="App">
      <h1> APP is working </h1>
      <DiceBox />
      <Form />
    </div>
  )
}

export default App
// number={numbers} handleClick={rollDice}