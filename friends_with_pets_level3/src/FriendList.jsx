import React from "react";
import Pet from "./Pet";


export default function FriendList(props){
    console.log(props)
    const petMap = props.pets.map((item) => {
        return (
            <Pet
            name={item.name}
            breed={item.breed}
            
            /> 

        )

    })
    // console.log(props)
    return (
        <div className="friendlist--container" >
            <h1 className="friendlist--name"> Name: {props.name}</h1>
            <h1 className="friendlist--age"> Age: {props.age}</h1>
            {petMap}
           
        </div>
    )
}