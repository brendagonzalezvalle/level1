import React from "react"

export default function BlogPost(props){
    return (
        <div className="blogPost--container">
            <h1 className="blogpost--header">{props.title}</h1>
            <h3 className="blogpost--subtitle">{props.subTitle}</h3>
            <p className="blogpost--author--date"> Posted by <a href="www.test.com">{props.author}</a> on {props.date} </p>

            
        </div>
    )
}