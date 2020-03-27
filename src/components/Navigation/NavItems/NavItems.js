import React from 'react'
import NavItemsStyle from './NavItems.module.css'
import NavItem from "./NavItem/NavItem"

const NavItems = (props) => {
    return (
        <nav className={props.className}>
            <ul className={NavItemsStyle.NavItems}>
                <NavItem active href="/">
                    Builder
            </NavItem>
                <NavItem href="/">
                    Checkout
            </NavItem>
            </ul>
        </nav>
    )
}

export default NavItems
