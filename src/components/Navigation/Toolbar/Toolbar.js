import React, { Component } from "react";
import ToolbarStyle from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import ToggleSideDrawer from '../SideDrawer/ToggleSideDrawer/ToggleSideDrawer'
class Toolbar extends Component {
    // state = {
    //     sticky: false
    // };
    // componentDidMount() {
    //     window.addEventListener("scroll", this.handleScroll);
    // }

    // // Remove the event listener when the component is unmount.
    // componentWillUnmount() {
    //     window.removeEventListener("scroll", this.handleScroll);
    // }

    // // Hide or show the menu.
    // handleScroll = () => {
    //     const currentScrollPos = window.pageYOffset;
    //     const sticky = currentScrollPos > 50;

    //     this.setState({
    //         sticky
    //     });
    // };
    render() {
        let classes = [ToolbarStyle.Toolbar]
        // if (this.state.sticky) {
        //     classes.push(ToolbarStyle.Fixed)
        // }
        return(
            <header className={classes.join(" ")}>
                <Logo height="80%" />
                <ToggleSideDrawer clicked={this.props.toggleSideDrawer} />
                <NavItems className={ToolbarStyle.DesktopOnly} />
            </header>
        )
    }
}

export default Toolbar
