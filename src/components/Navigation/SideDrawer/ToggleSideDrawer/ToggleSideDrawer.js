import React from 'react'
import ToggleSideDrawerStyle from './ToggleSideDrawer.module.css'

const ToggleSideDrawer = (props) => {
    return (
        <div className={ToggleSideDrawerStyle.ToggleSideDrawer} onClick={props.clicked}>
            <div />
            <div />
            <div />
        </div>
    )
}

export default ToggleSideDrawer
