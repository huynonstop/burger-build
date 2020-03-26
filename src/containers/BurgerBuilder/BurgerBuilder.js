import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Modal from "../../components/UI/Modal/Modal"
import OrderSumary from "../../components/Burger/OrderSumary/OrderSumary"

const PRICE = {
    salad: 2.4,
    bacon: 2,
    cheese: 2.7,
    meat: 1
};

export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        isOrdering: false
    };
    addIngredient = type => {
        const newIngredients = {
            ...this.state.ingredients,
            [type]: this.state.ingredients[type] + 1
        };
        const newPrice = PRICE[type] + this.state.totalPrice;
        this.setState({ ingredients: newIngredients, totalPrice: newPrice });
    };
    removeIngredient = type => {
        if (this.state.ingredients[type] <= 0) return;
        const newIngredients = {
            ...this.state.ingredients,
            [type]: this.state.ingredients[type] - 1
        };
        const newPrice = this.state.totalPrice - PRICE[type];
        this.setState({ ingredients: newIngredients, totalPrice: newPrice });
    };
    orderHandle = (status) => {
        this.setState({ isOrdering: status})
    }
    orderContinue = () => {
        alert("Order Complete")
    }
    render() {
        const ingredients = this.state.ingredients
        return (
            <>
                <Modal show={this.state.isOrdering} cancel={() => this.orderHandle(false)}>
                    <OrderSumary 
                        price={this.state.totalPrice.toFixed(2)}
                        continue={this.orderContinue}
                        cancel={() => this.orderHandle(false)}
                        ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={ingredients} />
                <BurgerControls
                    controls={Object.keys(ingredients).map(
                        key => ({ 
                            type: key, 
                            disabled: (ingredients[key] <= 0) ? true: false
                        }))
                    }
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    price={this.state.totalPrice.toFixed(2)}
                    order={() => this.orderHandle(true)}
                />
            </>
        );
    }
}
