import React from 'react'
import ButtonStyle from "./Button.module.css"

const Button = (props) => (
    <button 
        disabled={props.disabled}
        className={[ButtonStyle.Button,ButtonStyle[props.btnType]].join(" ")}
        onClick={props.onClick}>{props.children}</button>
)

export default Button
