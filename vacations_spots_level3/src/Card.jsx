import React from "react";

export default function Card (props){
    return (
        <div className="card--container">
            <h1 className="card--title">Vacation Gift Card</h1>
            <h1 className="card--value">Gift Card Amount: ${props.price}</h1>
            <h2 className="card--place">Location: {props.place}</h2>
            <h2 className="card--time">Best Time To Go: {props.timeToGo}</h2>
        </div>
    )
}