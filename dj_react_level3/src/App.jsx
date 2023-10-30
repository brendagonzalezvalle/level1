import { useState } from 'react'
import TopGrid from './TopGrid'
import BigDjOne from './BigDjOne'
import BigDjTwo from './BigDjTwo'
import BigDjThree from './BigDjThree'
import BigDjFour from './BigDjFour'
import PartyDj from './PartyDj'
import ProfessionalDj from './ProfessionalDJ'
import SmallDj from './SmallDj'
import './App.css'



export default function App() {

   const [color, setColor] = useState(["white", "white","white", "white"])

   let squares = document.getElementsByClassName("topGrid--containers")
  console.log(squares)
   

   function toggleFavorite() {
    setColor(["blue", "blue", "blue", "blue"])
}
console.log("blue")

// Black and White Squares
function toggleBlackWhite(){

  
  let squares = document.getElementsByClassName("topGrid--containers")
  console.log(squares)
  
  for (let i = 0; i < squares.length; i++) {
    
    if (color[i] === "white"){
      setColor(["black", "black", "black", "black"])
      squares[i].style.backgroundColor = "black"

    } else if (color[i] === "black") {
      setColor(["white", "white","white", "white"])
      squares[i].style.backgroundColor = "white"
    } else {
      console.log("else is running")
    }
    
    
    
  } 
  
}

// Toggle Purple

function togglePurpleTop(){

  squares[0].style.backgroundColor = "purple"
  squares[1].style.backgroundColor = "purple"
  
  
  
}

// Professional DJ Left/Right Blue Squares

function toggleBlueLeft(){

  squares[2].style.backgroundColor= "blue"

}
function toggleBlueRight(){
  

  squares[3].style.backgroundColor= "blue"

}

// Bj DJ Buttons

function toggleBigDjOne(){
  squares[0].style.backgroundColor= "pink"
}
function toggleBigDjTwo(){
  squares[1].style.backgroundColor= "orange"

}
function toggleBigDjThree(){
  squares[2].style.backgroundColor= "red"

}
function toggleBigDjFour(){
  squares[3].style.backgroundColor= "gray"

}


  

  return (
    <div>

      <div className="topgrid--container">
      <TopGrid  color1={color[0]} handleClick={toggleFavorite}/>
      <TopGrid color2={color[1]}/>
      <TopGrid color3={color[2]}/>
      <TopGrid color4={color[3]}/>
            
      </div>
      
      <SmallDj smallDjClick={toggleBlackWhite} />
      <PartyDj partyDJClick={togglePurpleTop}/>
      <ProfessionalDj leftBlueClick={toggleBlueLeft} rightBlueClick={toggleBlueRight}/> 
      <BigDjOne bigDjOneClick={toggleBigDjOne}/>
      <BigDjTwo bigDjTwoClick={toggleBigDjTwo}/>
      <BigDjThree bigDjThreeClick={toggleBigDjThree} />
      <BigDjFour bigDjFourClick={toggleBigDjFour} />
    
       
     
    </div>
  )
}


