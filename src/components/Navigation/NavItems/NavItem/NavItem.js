import React from 'react'
import NavItemStyle from './NavItem.module.css'
import { NavLink } from 'react-router-dom'

const NavItem = (props) => {
    return (
        <li className={NavItemStyle.NavItem} >
            <NavLink to={props.href} exact={props.exact} activeClassName={NavItemStyle.active}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default NavItem
