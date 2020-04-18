import React, { useState } from 'react';
import { connect } from 'react-redux'

import LayoutStyle from "./Layout.module.css"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"

const Layout = props => {
    const [showSideDrawer,setShowSideDrawer] = useState(false)

    const toggleSideDrawer = (status) => {
        setShowSideDrawer(status || !showSideDrawer)
    }
    const isAuth = props.isAuth
    return (
        <>
            <Toolbar isAuth={isAuth} toggleSideDrawer={toggleSideDrawer} />
            <SideDrawer
                isAuth={isAuth}
                show={showSideDrawer}
                close={() => toggleSideDrawer(false)} />
            <main className={LayoutStyle.content}>
                {props.children}
            </main>
        </>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.token !== null
})

export default connect(mapStateToProps)(Layout);