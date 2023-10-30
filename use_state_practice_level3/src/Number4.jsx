// 4. Change the following state-setting functions to use an implicit return
import React from "react";



export default function Number4(){

    const [colors, setColors] = React.useState(["pink", "blue"])
    

    function test1(){

        setColors(prevColors => ([
            ...prevColors, "green"
        ]))
    }
    console.log(colors)
        
    // 4 b. Change the following state-setting functions to use an implicit return

    const [countObject, setCountObject] = React.useState({
        count: 0
    })
    
    function test2(){
        
        setCountObject(prevState=> ({
            count: prevState.count + 1

        }))
            
  
    }
    console.log(countObject)

//    5. Update the following state to add an additional property age and set the value to 30, ensuring that the other properties are not overwritten.
    
const [person, setPerson] = React.useState({
    firstName: "John",
    lastName: "Smith"
})

function test3(){

    setPerson(prevState => ({
        ...prevState,
        age: 30
    }))

}
console.log(person)
    
// 6. What’s wrong with the following state update? We are overwritting the other properties and returning just a new string of "green"

const [colors2, setColors2] = React.useState(["pink", "blue"])

function test4(){

    setColors2("green")
}
console.log(colors2)

    return (
        <div>
            <h1 onClick= {test1}> Number4</h1>
            <h2 onClick={test2}> Number4 Test 2</h2>
            <h3 onClick={test3}> Question 5</h3>
            <h3 onClick={test4}> Question 6</h3>
        </div>
    )
}