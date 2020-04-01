import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-order'
import ContactDataStyle from './ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
class ContactData extends Component {
    state = {
        name: 'Huy',
        email: 'huy@gmail',
        address: {
            street: "",
            postCode: ""
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: this.state.name,
                email: this.state.email
            },
            time: new Date().toDateString()
        }
        axios.post('/orders.json', order)
            .then(res => console.log(res))
            .catch(res => console.log(res))
            .finally(() => {
                this.setState({ loading: false });
                this.props.history.push('/')
            })
    }
    render() {
        let from = (
            <form>
                <input className={ContactDataStyle.Input} type='text' name='name' placeholder="Your Name" />
                <input className={ContactDataStyle.Input} type='text' name='email' placeholder="Your Email" />
                <input className={ContactDataStyle.Input} type='text' name='street' placeholder="Street" />
                <input className={ContactDataStyle.Input} type='text' name='postCode' placeholder="Postal Code" />
                <Button btnType="Success" onClick={this.orderHandler}>ORDER</Button>
            </form>
        )
        if(this.state.loading) {
            from = <Spinner/>
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