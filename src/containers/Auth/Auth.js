import React, { Component } from 'react';
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import { inputSetup,checkValidity } from '../../shared/utility'
import Spinner from '../../components/UI/Spinner/Spinner'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button'
import AuthSytle from './Auth.module.css'
import { authAction } from '../../store/actions/index'
class Auth extends Component {
    componentDidMount() {
        if(!this.props.building && this.props.redirectPath !== "/") {
            this.props.onSetAuthRedirectPath()
        }
    }
    state = {
        controls: {
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
        },
        formIsValid: true,
        isSignUp: true
    }
    inputChangeHandler = (event, key) => {
        const updatedForm = {
            ...this.state.controls,
            [key]: {
                ...this.state.controls[key],
                value: event.target.value,
                valid: checkValidity(
                    event.target.value,
                    this.state.controls[key].validation
                ),
                touched: true
            }
        }
        this.setState({ controls: updatedForm })
    }
    submitHandler = (event) => {
        event.preventDefault()
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp)
    }
    switchAuthModeHandler = () => {
        this.setState(prev => ({
            isSignUp: !prev.isSignUp
        }))
    }
    render() {
        const formElementArray = []
        let errorMessage = null
        for (let key in this.state.controls) {
            formElementArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        let form = (
            <form onSubmit={this.submitHandler}>
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
                        onChange={(e) => this.inputChangeHandler(e, element.id)}
                    />
                ))}
                <Button btnType="Success">{this.state.isSignUp ? "Sign Up" : "Login"}</Button>
            </form>
        )
        if (this.props.loading) {
            form = <Spinner />
        }
        if (this.props.error) {
            errorMessage = (
                <p style={{color: "red"}}>{this.props.error.message}</p>
            )
        }
        return (
            <div className={AuthSytle.Auth}>
                {this.props.isAuth ? <Redirect to={this.props.redirectPath}/> : null}
                <h2>{this.state.isSignUp ? "Signup" : "Login"}</h2>
                {errorMessage}
                {form}
                <Button btnType="Danger" onClick={this.switchAuthModeHandler}>Go to {this.state.isSignUp ? "Login" : "Signup"}</Button>
            </div>
        );
    }
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