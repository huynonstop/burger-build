import React from 'react'
import Button from "../../UI/Button/Button"

const OrderSumary = (props) => {
    const ingredients = Object.keys(props.ingredients).map(key => (
        <li key={key}><span style={{ textTransform: "capitalize" }}>{key}</span>: {props.ingredients[key]}</li>
    ))
    return (
        <>
            <h3 style={{ textAlign: "center" }}>Your Order</h3>
            <p><strong>Ingredients list: </strong></p>
            <ul>
                {ingredients}
            </ul>
            <p><strong>Total price: </strong>{props.price}</p>
            <p style={{ textAlign: "center" }}> 
                <strong>Move to checkout ?</strong>               
            </p>
            <div style={{ textAlign: "center" }}>
                <Button btnType="Danger" onClick={props.cancel}>NO</Button>
                <Button btnType="Success" onClick={props.continue}>YES</Button>
            </div>

        </>
    )
}

export default OrderSumary
