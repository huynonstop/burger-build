import React, { useState } from 'react';
import { connect } from 'react-redux';

import { orderAction } from '../../../store/actions/index'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-order'
import ContactDataStyle from './ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import { inputSetup, checkValidity } from '../../../shared/utility'

const ContactData = (props) => {
    const { ingredients, price, userId, token, onOderBurger, loading } = props

    const [orderForm, setOrderForm] = useState({
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
            , "fastest"
        )
    })
    const [formIsValid, setFormIsValid] = useState(false)
    
    const orderHandler = (event) => {
        event.preventDefault()
        const formData = {}
        for (let formElement in orderForm) {
            formData[formElement] = orderForm[formElement].value
        }
        formData.time = new Date().toDateString()
        const orderData = {
            ingredients: ingredients,
            price: price,
            orderData: formData,
            userId: userId
        }
        onOderBurger(orderData,token)
    }
    const inputChangeHandler = (event, key) => {
        const updatedForm = {
            ...orderForm
        }
        const updatedFormElement = {
            ...updatedForm[key]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(
            updatedFormElement.value,
            updatedFormElement.validation
        )
        updatedFormElement.touched = true
        updatedForm[key] = updatedFormElement
        let formIsValid = true
        for(let key in updatedForm) {
            formIsValid = updatedForm[key].valid && formIsValid
        }
        setOrderForm(updatedForm)
        setFormIsValid(formIsValid)
    }
    const formElementArray = []

    for (let key in orderForm) {
        formElementArray.push({
            id: key,
            config: orderForm[key]
        })
    }
    let form = (
        <form onSubmit={orderHandler}>
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
            <Button btnType="Success" disabled={!formIsValid}>ORDER</Button>
        </form>
    )
    if (loading) {
        form = <Spinner />
    }
    return (
        <div className={ContactDataStyle.ContactData}>
            <h3>Your contact infomation</h3>
            {form}
        </div>
    );
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