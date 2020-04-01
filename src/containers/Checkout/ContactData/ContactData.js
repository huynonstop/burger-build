import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-order'
import ContactDataStyle from './ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input';
const inputSetup = (elementType, elementConfig, value = "") => ({
    elementType: elementType,
    elementConfig: elementConfig,
    value: value
})

class ContactData extends Component {
    state = {
        orderForm: {
            name: inputSetup(
                "input",
                { 
                    type: 'text',
                    placeholder: "Your Name"
                },
            ),
            email: inputSetup(
                "input",
                { 
                    type: "email", 
                    placeholder: "Your Email" 
                }
            ),
            street: inputSetup(
                "input", 
                { 
                    type: 'text', 
                    placeholder: "Your Street" 
                }
            ),
            zipCode: inputSetup(
                "input", 
                { 
                    type: 'text', 
                    placeholder: "ZIP" 
                }
            ),
            country: inputSetup(
                "input", 
                { 
                    type: 'text', 
                    placeholder: "Your Country" 
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
                }
            )
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true })
        const formData = {}
        for(let formElement in this.state.orderForm) {
            formData[formElement] = this.state.orderForm[formElement].value
        }
        formData.time = new Date().toDateString()
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData : formData
        }
        axios.post('/orders.json', order)
            .then(res => console.log(res))
            .catch(res => console.log(res))
            .finally(() => {
                this.setState({ loading: false });
                this.props.history.push('/')
            })
    }
    inputChangeHandler = (event, key) => {
        const updatedForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedForm[key] 
        }
        updatedFormElement.value = event.target.value;
        updatedForm[key] = updatedFormElement
        this.setState({
            orderForm: updatedForm
        })
    }
    render() {
        const formElementArray = []
        for(let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let from = (
            <form onSubmit={this.orderHandler}>
                {formElementArray.map(element => (
                    <Input 
                        key={element.id}
                        id={element.id} 
                        elementType={element.config.elementType}
                        elementConfig={element.config.elementConfig}    
                        value={element.config.value}
                        onChange={(e) => this.inputChangeHandler(e,element.id)}
                        />
                ))}
                <Button btnType="Success">ORDER</Button>
            </form>
        )
        if (this.state.loading) {
            from = <Spinner />
        }
        return (
            <div className={ContactDataStyle.ContactData}>
                <h4>Your contact infomation</h4>
                {from}
            </div>
        );
    }
}

export default ContactData;