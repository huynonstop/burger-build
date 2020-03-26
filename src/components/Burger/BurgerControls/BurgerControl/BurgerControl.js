import React from 'react'
import BurgerControlStyle from './BurgerControl.module.css'

const BurgerControl = props => {
    return (
        <div className={BurgerControlStyle.BuildControl}>
            <button
                className={BurgerControlStyle.Remove}
                onClick={props.remove} disabled={props.disabled}>Remove</button>
            <div className={BurgerControlStyle.Label}>{props.control}</div>
            <button
                className={BurgerControlStyle.Add}
                onClick={props.add}>Add</button>
        </div>
    )
}

export default BurgerControl
