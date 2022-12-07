import React from "react";

type GreetProps ={
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

function Greet (props: GreetProps){

    
    return (
        <div>
            <h2>
            {props.isLoggedIn ? ` Welcome ${props.name}! You have ${props.messageCount} unread messages.` : `Welcome Guest`}
            </h2>
        </div>
    )
}

export default Greet;