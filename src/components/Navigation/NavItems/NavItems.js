import React from 'react'
import NavItemsStyle from './NavItems.module.css'
import NavItem from "./NavItem/NavItem"

const NavItems = (props) => {
    return (
        <nav className={props.className}>
            <ul className={NavItemsStyle.NavItems}>
                <NavItem href="/" exact>
                    Builder
                </NavItem>
                {props.isAuth ? <NavItem href="/orders">Orders</NavItem> : null}
                {!props.isAuth
                    ? <NavItem href="/auth">Sign Up</NavItem>
                    : <NavItem href="/logout">Logout</NavItem>}
            </ul>
        </nav>
    )
}

export default NavItems
