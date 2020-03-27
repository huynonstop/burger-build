import React from 'react'
import logo from '../../assets/images/logo.png'
import LogoStyle from './Logo.module.css'

const Logo = (props) => {
    return (
        <div className={LogoStyle.Logo} style={{height : props.height}}>
            <img src={logo} alt="logo"/>
        </div>
    )
}

Logo.defaultProps = {
    height: "100%"
}
export default Logo
