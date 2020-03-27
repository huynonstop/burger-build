import React from 'react'
import ToolbarStyle from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import ToggleSideDrawer from '../SideDrawer/ToggleSideDrawer/ToggleSideDrawer'

const Toolbar = (props) => (
    <header className={ToolbarStyle.Toolbar}>
        <Logo height="80%"/>
        <ToggleSideDrawer clicked={props.toggleSideDrawer}/>
        <NavItems className={ToolbarStyle.DesktopOnly}/>
    </header>
)

export default Toolbar
