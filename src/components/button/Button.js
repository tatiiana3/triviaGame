import React from 'react';

import './ButtonStyle.css'

const Button = (props) => {
    return (
        <button className="submitButton" onClick={props.handleSubmit}>
            {props.message}
        </button>
    )
}

export default Button
