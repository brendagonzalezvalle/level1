import React from "react";


export default function PartyDj(props){
    return (
        <div className="dj-buttons">
            <button onClick={props.partyDJClick}> Party Dj </button>
        </div>
    )
}