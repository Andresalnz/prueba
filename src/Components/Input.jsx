import React from 'react'

const Input = (props) => {
    return (
        <div>        
            <input 
            type={props.state} 
            placeholder={props.name} 
            className={props.class}
            value= {props.value}
            onChange={props.change}
            /> 
        </div>
    )
}

export default Input
