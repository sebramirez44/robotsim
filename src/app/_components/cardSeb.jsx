import React, { useState } from 'react';

// tomar como props title, description y imageURL
export default function CardSeb({title, description, imageURL}) {
    const [hover, setHover] = useState(false)
    return (
        <div className="Card">
            {hover && <div className="nameDescription" onMouseLeave={() => setHover(false)}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>}
              
            <img src={imageURL} className="lesson-image" onMouseEnter={() => setHover(true)}  omMouseLeave={() => setHover(false)}/>
              
        </div>
    )
}