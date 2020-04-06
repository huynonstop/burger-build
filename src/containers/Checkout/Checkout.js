import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux';

class Checkout extends Component {
    checkoutBackHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }
    render() {
        const { ingredients } = this.props
        return (
            <div>
                <CheckoutSummary 
                    ingredients={ingredients} 
                    checkoutBack={this.checkoutBackHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                />
                <Route path={this.props.match.path + '/contact-data'} 
                    component={ContactData}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    ingredients: state.ingredients
})
export default connect(mapStateToProps)(Checkout);