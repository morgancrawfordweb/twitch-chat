import React from "react";
import Button from "./Button";
import Message from "./Message";

const Footer =()=>{

    const onClick = ()=>{
        console.log('Ligma')
    }


    return(
        <div>
            <h1>This is where all of my component will go in the footer!</h1>
            <form></form><Button color='magenta' text='Submit This' onClick={onClick}/>
        </div>
    )
}

export default Footer