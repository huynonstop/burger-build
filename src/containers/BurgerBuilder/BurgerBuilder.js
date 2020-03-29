import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Modal from "../../components/UI/Modal/Modal"
import OrderSumary from "../../components/Burger/OrderSumary/OrderSumary"
import axios from '../../axios-order'
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"

const PRICE = {
    salad: 2.4,
    bacon: 2,
    cheese: 2.7,
    meat: 1
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 0,
        isOrdering: false,
        loading: false,
        error: null
    };
    componentDidMount() {
        axios.get('/ingredients.json')
            .then(res => {
                this.setState({ingredients: res.data})
            })
            .catch(err => {
                this.setState({error : true})
            })
    }
    componentWillUnmount() {
        
    }
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
        this.setState({ isOrdering: status })
    }
    orderContinue = () => {
        //alert("Order Complete")
        this.setState({ loading: true })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Huy",
                email: "huy@gmail.com"
            },
            time: new Date().toDateString()
        }
        axios.post('/orders.json', order)
            .then(res => console.log(res))
            .catch(res => console.log(res))
            .finally(() => this.setState({ isOrdering: false,loading: false }))
    }
    render() {
        const ingredients = this.state.ingredients
        let orderSumary = null
        let burger = this.state.error ? <p style={{width: "60%",textAlign: "center", margin: "auto"}}>Oops! Somthing went wrong</p> : <Spinner/>
        if(ingredients) {
            burger = <>
                <Burger ingredients={ingredients} />
                <BurgerControls
                    controls={Object.keys(ingredients).map(
                        key => ({
                            type: key,
                            disabled: (ingredients[key] <= 0) ? true : false
                        }))
                    }
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    price={this.state.totalPrice.toFixed(2)}
                    order={() => this.orderHandle(true)}
                />
            </>
            orderSumary = <OrderSumary
                price={this.state.totalPrice.toFixed(2)}
                continue={this.orderContinue}
                cancel={() => this.orderHandle(false)}
                ingredients={ingredients} />
        }
        
        if(this.state.loading) {
            orderSumary = <Spinner />
        }       
            
        return (
            <>
                <Modal show={this.state.isOrdering} cancel={() => this.orderHandle(false)}>
                    {orderSumary}
                </Modal>
                {burger}
            </>
        );
    }
}
export default withErrorHandler(BurgerBuilder,axios)