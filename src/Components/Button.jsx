import React from 'react'

const Button = (props) => { 
    return (
        <div>
            <input onClick={props.editando} type={props.type} value={props.value} className={props.class}/>    
        </div>
    )
}

export default Button
