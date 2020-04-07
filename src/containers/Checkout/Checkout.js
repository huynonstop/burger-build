import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom'
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
        const { ingredients, purchase } = this.props
        let summary = ingredients ? 
        <div>
            {purchase ? <Redirect to='/' /> : null}
            <CheckoutSummary
                ingredients={ingredients}
                checkoutBack={this.checkoutBackHandler}
                checkoutContinue={this.checkoutContinueHandler}/>
            <Route path={this.props.match.path + '/contact-data'}component={ContactData}/>
        </div> : <Redirect to='/' />
        return summary
    }
}
const mapStateToProps = (state) => ({
    ingredients: state.burgerBuilder.ingredients,
    purchase: state.order.purchase
})
export default connect(mapStateToProps)(Checkout);