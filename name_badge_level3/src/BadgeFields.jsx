import React from "react";
import Badge from "./Badge";

export default function BadgeFields (){

    const inputClear = {
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phoneNumber: "",
        favoriteFood: "",
        aboutUser: "",
    }

    const [badgeData, setBadgeData] = React.useState(
        inputClear

    )
    console.log(badgeData)

    const [badgeListData,setBadgeListData] = React.useState([])

    function handleBadgeData(event){
        console.log(event)
        setBadgeData((prevbadgeData) => {
            return {
                ...prevbadgeData,
                [event.target.name]: event.target.value
               
                
            }
        })
    }
  
    console.log(badgeData)

 function handleSubmit(event){
        event.preventDefault()
       console.log(badgeData)

       setBadgeListData((prevListData) => [
        ...prevListData,
        badgeData
  
    ])

    setBadgeData(inputClear)
    
    
    
    
    
}
    const test = badgeListData.map((items, index) => {
        return <Badge 
        id={index}
        key={index}
        firstName={items.firstName}
        lastName={items.lastName}
        email={items.email}
        placeOfBirth={items.placeOfBirth}
        phoneNumber={items.phoneNumber}
        favoriteFood={items.favoriteFood}
        aboutUser={items.aboutUser}

        />
    })
console.log(test)





    return (
        <div>
           
            <form id="form--container" onSubmit={handleSubmit}>

                
                <input 
                type="text"
                minlength="3"
                placeholder="First Name"
                className="left--fields"
                name="firstName"
                value={badgeData.firstName}
                onChange={handleBadgeData}
                
                
                />
                <input 
                type="text"
                minlength="3"
                placeholder="Last Name"
                className="right--fields"
                name="lastName"
                onChange={handleBadgeData}
                value={badgeData.lastName}
                
                />
                <input 
                type="email"
                minlength="3" 
                placeholder="Email"
                className="left--fields"
                name="email"
                onChange={handleBadgeData}
                value={badgeData.email}
                /> 
                <input 
                type="text"
                minlength="3"
                placeholder="Place of Birth"
                className="right--fields"
                name="placeOfBirth"
                onChange={handleBadgeData}
                value={badgeData.placeOfBirth}
                />
                <input 
                type="tel"
                title="only numbers (no dashes or special characters"
                pattern="[0-9]{3}[0-9]{2}[0-9]{3}"
                minlength="3"
                placeholder="12345678"
                className="left--fields"
                name="phoneNumber"
                onChange={handleBadgeData}
                value={badgeData.phoneNumber}
                
                />
                <input 
                type="text"
                minlength="3"
                placeholder="Favorite Food"
                className="right--fields"
                name="favoriteFood"
                onChange={handleBadgeData}
                value={badgeData.favoriteFood}

                
                />
                <textarea 
                rows="10"
                cols="30"
                minlength="3"
                id="form--textarea"
                name="aboutUser" 
                onChange={handleBadgeData}
                value={badgeData.aboutUser}
                >
                Tell us about yourself 
                   
                </textarea>
                <button id="form--button"> Submit </button>

                
            </form>

            {test}

            

      
            
        </div>

        

        
    )

    
}