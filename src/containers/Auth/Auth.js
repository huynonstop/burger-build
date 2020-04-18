/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from 'react';
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import { inputSetup,checkValidity } from '../../shared/utility'
import Spinner from '../../components/UI/Spinner/Spinner'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button'
import AuthSytle from './Auth.module.css'
import { authAction } from '../../store/actions/index'
const Auth = props => {
    const [controls, setControls] = useState({
        email: inputSetup(
            "input",
            {
                type: "email",
                placeholder: "Your Email"
            },
            {
                required: true,
                isEmail: true,
                errorMessage: "Please enter a valid value"
            }
        ),
        password: inputSetup(
            "input",
            {
                type: "password",
                placeholder: "Your Password"
            },
            {
                required: true,
                minLegth: 6,
                errorMessage: "Please enter a valid value"
            }
        ),
    })
    const [isSignUp, setIsSignUp] = useState(true)


    useEffect(() => {
        if (!props.building && props.redirectPath !== "/") {
            props.onSetAuthRedirectPath()
        }
    },[])

    const inputChangeHandler = (event, key) => {
        const updatedForm = {
            ...controls,
            [key]: {
                ...controls[key],
                value: event.target.value,
                valid: checkValidity(
                    event.target.value,
                    controls[key].validation
                ),
                touched: true
            }
        }
        setControls(updatedForm)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        props.onAuth(controls.email.value, controls.password.value, isSignUp)
    }
    const switchAuthModeHandler = () => {
        setIsSignUp(!isSignUp)
    }
    const formElementArray = []
    let errorMessage = null
    for (let key in controls) {
        formElementArray.push({
            id: key,
            config: controls[key]
        })
    }
    let form = (
        <form onSubmit={submitHandler}>
            {formElementArray.map(element => (
                <Input
                    key={element.id}
                    id={element.id}
                    elementType={element.config.elementType}
                    elementConfig={element.config.elementConfig}
                    value={element.config.value}
                    invalid={!element.config.valid}
                    shouldValidation={element.config.validation}
                    touched={element.config.touched}
                    onChange={(e) => inputChangeHandler(e, element.id)}
                />
            ))}
            <Button btnType="Success">{isSignUp ? "Sign Up" : "Login"}</Button>
        </form>
    )
    if (props.loading) {
        form = <Spinner />
    }
    if (props.error) {
        errorMessage = (
            <p style={{color: "red"}}>{props.error.message}</p>
        )
    }
    return (
        <div className={AuthSytle.Auth}>
            {props.isAuth ? <Redirect to={props.redirectPath}/> : null}
            <h2>{isSignUp ? "Signup" : "Login"}</h2>
            {errorMessage}
            {form}
            <Button btnType="Danger" onClick={switchAuthModeHandler}>Go to {isSignUp ? "Login" : "Signup"}</Button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    building: state.burgerBuilder.building,
    redirectPath: state.auth.redirectPath
})

const mapDispatchToProps = (dispatch) => ({
    onAuth: (email, password, isSignUp) => dispatch(authAction.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch(authAction.setAuthRedirectPath("/"))
})


export default connect(mapStateToProps, mapDispatchToProps)(Auth);