import React from "react";

export default function Pet (props){
    console.log(props)
    return (
        <div className="pet--container">
           
            <h1>Pet Name:{props.name}</h1>
            <h1>Pet Breed: {props.breed}</h1>
            
        </div>
    )
}