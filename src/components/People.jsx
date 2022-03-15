import React from 'react';
import { useParams } from 'react-router';

const People =() => {

        const { id, color1, color2 } = useParams();

    return (
        <div style ={{border: "1px solid black",background: color2 }}>
        {
        isNaN(id)?
        <p style = {{color: color1}}>The word is: {id}</p>:
        <p>The number is: {id}</p>
        }
        </div>
        
    );
}

export default People;