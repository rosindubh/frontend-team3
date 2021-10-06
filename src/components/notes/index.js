// phil welsby - 6 oct 2021 - notes/index.js
import React from "react";

export const Notes = ({title, content}) => {

    return(
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}