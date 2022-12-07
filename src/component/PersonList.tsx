import React from "react";


    type list = {
       names:{ 
        first: string,
        last: string
       }[]
    }

function PersonList(props: list){

    return(
        <div>
            {props.names.map( name => <p>{name.first} {name.last}</p>)}
        </div>
    )
}

export default PersonList;