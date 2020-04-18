import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux';
const Checkout = props => {
    const checkoutBackHandler = () => {
        props.history.goBack();
    }
    const checkoutContinueHandler = () => {
        props.history.replace('/checkout/contact-data')
    }

    const { ingredients, purchase } = props
    let summary = ingredients ? 
        <div>
            {purchase ? <Redirect to='/' /> : null}
            <CheckoutSummary
                ingredients={ingredients}
                checkoutBack={checkoutBackHandler}
                checkoutContinue={checkoutContinueHandler}/>
            <Route path={props.match.path + '/contact-data'}component={ContactData}/>
        </div> : <Redirect to='/' />
        
    return summary
}
const mapStateToProps = (state) => ({
    ingredients: state.burgerBuilder.ingredients,
    purchase: state.order.purchase
})
export default connect(mapStateToProps)(Checkout);