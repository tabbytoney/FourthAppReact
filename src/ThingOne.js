import React from 'react';

function ThingOne(props) {
    return (
        <div>
            <h3>Thing one component</h3>
            <h4>Hello {props.thePropOne}</h4>
        </div>
    )
}


export default ThingOne;