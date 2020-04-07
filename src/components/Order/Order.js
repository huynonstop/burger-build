import React from 'react'
import OrderStyle from './Order.module.css'
const Order = (props) => {
    const ingredients = []
    for (let i in props.ingredients) {
        ingredients.push({name: i, amount: props.ingredients[i]})
    }
    const ingredientsText = ingredients.map(i => {
        return <span key={i.name} 
                    style={{
                        textTransform: "capitalize",
                        display:"inline-block",
                        margin: "0 8px",
                        padding: '5px',
                        border: "1px solid #ccc"
                    }}>
                {i.name} ({i.amount})
            </span>
    })
    return (
        <div className={OrderStyle.Order}>
            <p>ID : <strong>{props.id}</strong></p>
            <p>Ingredients: {ingredientsText}</p>
            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>            
        </div>
    )
}
export default Order
