import React from "react";


export default function Header() {

  const [color, setColor] = React.useState("pink")
  
// /*1. */ function handleClick (){
//     setColor("purple")

//   }

/*2. */  function handleClick(){
    setColor(prevState => {
         if(prevState === "pink"){
            return "purple"
         } else {
            return "pink"
         }
        })
        return setColor
}


  
  return (
    
    <div>
        <h1 onClick={handleClick}> Hey {color} </h1>

    </div> 
  )
}