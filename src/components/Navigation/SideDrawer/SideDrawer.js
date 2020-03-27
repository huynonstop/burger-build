import React from 'react'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import SideDrawerStyle from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {
    let classes = [SideDrawerStyle.SideDrawer,SideDrawerStyle.Close]
    if(props.show) {
        classes = [SideDrawerStyle.SideDrawer, SideDrawerStyle.Open]
    }
    return (
        <>
            <Backdrop show={props.show} clicked={props.close}/>
            <div className={classes.join(" ")}>
                <Logo height="12%" />
                <NavItems />
            </div>
        </>
    )
}

export default SideDrawer
