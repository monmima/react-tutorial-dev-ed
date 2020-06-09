import React from "react";

const Recipe = ({title, calories, image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt={title} />
        </div>
    );
}

export default Recipe;