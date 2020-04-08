import React, { Component } from 'react';
import { connect } from 'react-redux'

import LayoutStyle from "./Layout.module.css"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"


class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    toggleSideDrawer = (status) => {
        if (status !== undefined) {
            this.setState({ showSideDrawer: status })
        } else {
            this.setState((prevState) => ({ showSideDrawer: !prevState.showSideDrawer }))
        }
    }
    render() {
        const isAuth = this.props.isAuth
        return (
            <>
                <Toolbar isAuth={isAuth} toggleSideDrawer={this.toggleSideDrawer} />
                <SideDrawer
                    isAuth={isAuth}
                    show={this.state.showSideDrawer} 
                    close={() => this.toggleSideDrawer(false)} />
                <main className={LayoutStyle.content}>
                    {this.props.children}
                </main>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.token !== null
})

export default connect(mapStateToProps)(Layout);