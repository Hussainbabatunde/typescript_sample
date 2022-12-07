import React from "react";


    type Personprops= {
        name: {
            first: string,
            last: string
        }
    }
function Person (props: Personprops) {
    return (
        <div>
            <h2>{props.name.first} {props.name.last}</h2>
        </div>
    )
}

export default Person;