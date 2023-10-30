// import { useState } from 'react'

// # Name Entry

// Build a simple react app with an input box, an `<h1>`, a button, and an ordered list. The user will type names into the input box.

// When the user types in the input box, the `<h1>` should update to show the same text as the input box.

// When the user clicks the button, the value of the input box should be added to a running list of names that have been previous entered. (Hint: you'll need to set state and map over an array to do this).

// # Next Up

// ‣
import React from 'react'

export default function App() {

  // SetState

  const [formData, setFormData] = React.useState({
    names: "",
    
    
  })

  const [listData, setListData] = React.useState([])

  
  console.log(formData)
  
  // Handle Change function and use call back function state to update name key to the value of input

  function handleChange(event){
    event.preventDefault()
    const valueOfInput = event.target.value
    console.log(valueOfInput)


    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: valueOfInput
      }

    })
 

  }

  // handle submit function and creating a new state to list the data out

  function handleSubmit(event){
    event.preventDefault()


    setListData((prevListData) => [
      ...prevListData,
      formData

    ])

    const valueOfInput = event.target.value
    

  
  }
  const liNames = listData.map((items)=> {
    return <li> {items.names}</li>
  })
  

  return (
    <div className="App">
      <div id="top--container">
        <img id="schoolBus" src='https://media.istockphoto.com/id/1222893408/vector/vector-cartoon-school-bus-illustration.jpg?s=612x612&w=0&k=20&c=ZdQdwj77APBCX5DBYSyrqjhdXiExBkHaWL5JoxB9u88='/>

        <h1 id="title-attendance">Daily Attendance Sheet</h1>

        <img id="crayonImage"src='https://media.istockphoto.com/id/1062344518/vector/crayon-vector-isolated.jpg?s=612x612&w=0&k=20&c=2MuUOrT7sxj-SlnoAFxG9vDD59br4Zq0Q57PbQRm04Q='/>

      </div>


      <form id = "form" onSubmit={handleSubmit}> 
        <label htmlFor="students"> Enter your student's names: </label>

        < input 
        // key={formData.names}
        type="text"
        // placeholder="Name's "
        id="students"
        name="names"
        value={formData.names}
        onChange={(e)=>handleChange(e)}
        >
        
        </ input>

        <div id="names-container">

          <h1 id="header1"> Names: {formData.names}  </h1>
          <button>Submit</button>

        </div>



      </form>

      

       

        <ol id="nameOrderList">

       {liNames}
          
          
        </ol>




    </div>
  )
}



