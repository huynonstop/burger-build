import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

import CheckoutSummaryStyle from './CheckoutSummary.module.css'

const CheckoutSummary = (props) => {
    return (
        <div className={CheckoutSummaryStyle.CheckoutSummary}>
            <h1>GLHF!</h1>
            <div style={{ width: "100%", margin: "auto" }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" onClick={props.checkoutBack}>BACK</Button>
            <Button btnType="Success" onClick={props.checkoutContinue}>CONTINUE</Button>
        </div>
    )
}

export default CheckoutSummary
