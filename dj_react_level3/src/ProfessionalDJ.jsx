import React from "react";


export default function ProfessionalDj(props){
    return (
        <div className="dj-buttons">
            
                <button onClick={props.leftBlueClick}> Left Blue </button>

                <div className="right-blue">
                    <button onClick={props.rightBlueClick}> Right Blue </button>

                </div>


        

            

        </div>
    )
}