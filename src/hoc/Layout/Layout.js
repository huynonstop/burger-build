import React, { Component } from 'react';
import LayoutStyle from "./Layout.module.css"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"


class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    toggleSideDrawer = (status) => {
        if(status !== undefined) {
            this.setState({ showSideDrawer: status })
        }else{
            this.setState((prevState) => ({ showSideDrawer: !prevState.showSideDrawer }))
        }
    }
    render() {
        return (
            <>
                <Toolbar toggleSideDrawer={this.toggleSideDrawer}/>
                <SideDrawer show={this.state.showSideDrawer} close={() => this.toggleSideDrawer(false)}/>
                <main className={LayoutStyle.content}>
                    {this.props.children}
                </main>
            </>
        );
    }
}
export default Layout;