import React from "react";

export default function Badge (props){



    return (
         <div id="badge--container">

            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/823/192/small_2x/abstract-lines-in-circle-form-design-element-geometric-shape-striped-border-frame-for-image-technology-round-logo-spiral-illustration-free-vector.jpg" alt="logo" id="badge--logo"/>

        
        <h1 id="badge--name"> {props.firstName} {props.lastName}</h1>
        <h1 className="badge--middle"> Phone Number: {props.phoneNumber} </h1>
        <h1 className="badge--middle"> Place of Birth: {props.placeOfBirth}</h1>
        <h1 className="badge--middle"> Favorite Food: {props.favoriteFood}</h1>
        <h1 className="badge--middle"> Email: {props.email}</h1>
        <p> {props.aboutUser}</p>
        <img src="https://cdn.pixabay.com/photo/2022/02/07/19/13/barcode-7000118__340.png" alt="barcode" />
          
            
        
        
        </div>
    )
}