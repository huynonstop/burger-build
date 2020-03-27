import React from 'react'
import NavItemStyle from './NavItem.module.css'

const NavItem = (props) => {
    return (
        <li className={NavItemStyle.NavItem} >
            <a href={props.href} className={props.active ? NavItemStyle.active : ""}>
                {props.children}
            </a>
        </li>
    )
}

export default NavItem
