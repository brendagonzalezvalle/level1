// 3. Add a new person object to the following people array in state. You can hard-code a new object but it must be a person object with firstName and lastName properties.

import React from "react";

console.log("Test")


export default function Header2() {

    
const [people, setPeople] = React.useState([
     {
            firstName: "John",
            lastName: "Smith"
     }
    ])
console.log(people)
    
function test (){
    
        setPeople(prevStatePeople => ([
        ...prevStatePeople, 
        {
            firstName: "Brenda",
            lastName: "Holman"
    
        }
        
       
]))
}


  return (
    
    <div>
        <h1 onClick={test}> Header2  </h1>
        <h2> {people[0].firstName} {people[0].lastName}
     
        </h2>
        
        
    </div> 
  )
}