import React, { Component } from 'react';
import { connect } from 'react-redux';

import { orderAction } from '../../../store/actions/index'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-order'
import ContactDataStyle from './ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import { inputSetup } from '../../utility'


class ContactData extends Component {
    state = {
        orderForm: {
            name: inputSetup(
                "input",
                {
                    type: 'text',
                    placeholder: "Your Name"
                },
                {
                    required: true,
                    errorMessage: "Please enter a valid value"
                }
            ),
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
            street: inputSetup(
                "input",
                {
                    type: 'text',
                    placeholder: "Your Street"
                },
                {
                    required: true,
                    errorMessage: "Please enter a valid value"
                }
            ),
            zipCode: inputSetup(
                "input",
                {
                    type: 'text',
                    placeholder: "ZIP"
                },
                {
                    required: true,
                    minLegth: 5,
                    maxLength: 5,
                    isNumeric: true,
                    errorMessage: "Please enter a valid value"
                }
            ),
            country: inputSetup(
                "input",
                {
                    type: 'text',
                    placeholder: "Your Country"
                },
                {
                    required: true,
                    errorMessage: "Please enter a valid value"
                }
            ),
            method: inputSetup(
                "select",
                {
                    options: [
                        { value: "fastest", displayValue: "Fastest" },
                        { value: "cheapest", displayValue: "Cheapest" },
                        { value: "normal", displayValue: "Normal" }
                    ]
                },
                {}
                ,"fastest"
            )
        },
        formIsValid: false
    }
    orderHandler = (event) => {
        event.preventDefault()
        const { ingredients, price } = this.props
        const formData = {}
        for (let formElement in this.state.orderForm) {
            formData[formElement] = this.state.orderForm[formElement].value
        }
        formData.time = new Date().toDateString()
        const orderData = {
            ingredients: ingredients,
            price: price,
            orderData: formData,
            userId: this.props.userId
        }
        this.props.onOderBurger(orderData,this.props.token)
    }
    inputChangeHandler = (event, key) => {
        const updatedForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedForm[key]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        )
        updatedFormElement.touched = true
        updatedForm[key] = updatedFormElement
        let formIsValid = true
        for(let key in updatedForm) {
            formIsValid = updatedForm[key].valid && formIsValid
        }
        this.setState({
            orderForm: updatedForm,
            formIsValid: formIsValid
        })
    }
    checkValidity = (value, rules) => {
        let isValid = true

        if (!rules) {
            return isValid
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (rules.minLegth) {
            isValid = value.length >= rules.minLegth && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
        if (rules.isEmail) {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            isValid = pattern.test(value) && isValid
        }
        if (rules.isNumeric) {
            const pattern = /^\d+$/
            isValid = pattern.test(value) && isValid
        }
        return isValid
    }
    render() {
        const formElementArray = []
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
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
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        )
        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <div className={ContactDataStyle.ContactData}>
                <h3>Your contact infomation</h3>
                {form}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    ingredients: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice.toFixed(2),
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
})
const mapDispatchToProps = dispatch => ({
    onOderBurger: (orderData,token) => dispatch(orderAction.purchaseBuger(orderData,token))
})
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData,axios));