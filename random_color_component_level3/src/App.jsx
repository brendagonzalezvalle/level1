import { useState, useEffect } from 'react'

import React from 'react'
// Create a component that uses axios to GET a random color from the random color API and sets that component's background color to that random color.

// https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}


import './App.css'
// import RandomColor from './RandomColor'


export default function App() {
  
  const [colorData, SetColorData] = useState("")
  const [count, SetCount] = React.useState(0)
  
  useEffect(() => {
    
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
    .then(res => SetColorData(res.data.colors[0].hex))
    .catch(error => error)
    
    
    
  }, [count])
  console.log(colorData)

  const styles = {
    backgroundColor: `#${colorData}`
  
  }

  function handleChange(){

    console.log("button is working")
    return SetCount((prevSetCount) => prevSetCount +1
    
    )
    
    
  }
  console.log(count)




  return (

    <div className="app" style={styles}
      
    >
      <h1> Hi! Welcome to my page. I can do one thing only and that is change colors. </h1>
      <button onClick={handleChange}> Click Me </button>
     
       
    </div>
  )
}


