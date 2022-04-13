import React from 'react'
import '../Buttons/primaryButton.scss' 

function PrimaryButton(props) {
    const type = props.type;
    return ( 
    <button className="primary-button"> {props.text} </button>
    )
}

export default PrimaryButton