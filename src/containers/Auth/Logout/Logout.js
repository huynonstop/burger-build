/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom"
import { authAction } from '../../../store/actions/index'

const Logout = props => {
    useEffect(() => {
        props.onLogout()
    },[])
    return (
        <Redirect to="/" />
    );
}

const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch(authAction.logout())
})

export default connect(null,mapDispatchToProps)(Logout);