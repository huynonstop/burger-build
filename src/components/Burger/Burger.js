import React from 'react'
import BurgerIgredient from './BurgerIngredient/BurgerIgredient'
import BurgerStyle from './Burger.module.css'

const Burger = (props) => {
    const ingredients = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_, i) => {
            return <BurgerIgredient key={key + i} type={key} />
        })
    }).reduce((arr, el) => [...arr, ...el], [])
    const display = ingredients.length !== 0 ? ingredients : <p>Add ingredients to your burger</p>
    return (
        <div className={BurgerStyle.Burger}>
            <BurgerIgredient type="bread-top" />
            {display}
            <BurgerIgredient type="bread-bottom" />
        </div>
    )
}

export default Burger
