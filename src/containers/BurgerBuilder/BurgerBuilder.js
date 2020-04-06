import React, { Component } from "react";
import { connect } from "react-redux";
import { burgerBuilderAction } from '../../store/actions/index'
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Modal from "../../components/UI/Modal/Modal"
import OrderSumary from "../../components/Burger/OrderSumary/OrderSumary"
import axios from '../../axios-order'
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"

class BurgerBuilder extends Component {
    state = {
        isOrdering: false
    };
    componentDidMount() {
        this.props.onInitIngredient()
    }
    orderHandle = (status) => {
        this.setState({ isOrdering: status })
    }
    orderContinue = () => {
        this.props.history.push('/checkout')
    }
    render() {
        const { ingredients, price, loading, error } = this.props
        let orderSumary = null
        let burger = error ? <p style={{ width: "60%", textAlign: "center", margin: "auto" }}>Oops! Somthing went wrong</p> : <Spinner />
        if (ingredients) {
            burger = <>
                <Burger ingredients={ingredients} />
                <BurgerControls
                    controls={Object.keys(ingredients).map(
                        key => ({
                            type: key,
                            disabled: (ingredients[key] <= 0) ? true : false
                        }))
                    }
                    addIngredient={this.props.onAddedIngredient}
                    removeIngredient={this.props.onRemovedIngredient}
                    price={price}
                    order={() => this.orderHandle(true)}
                />
            </>
            orderSumary = <OrderSumary
                price={price}
                continue={this.orderContinue}
                cancel={() => this.orderHandle(false)}
                ingredients={ingredients} />
        }

        if (loading) {
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
const mapStateToProps = (state) => ({
    ingredients: state.ingredients,
    error: state.error,
    loading: state.loading,
    price: state.totalPrice.toFixed(2)
})

const mapDispatchToProps = dispatch => ({
    onAddedIngredient: (name) => dispatch(burgerBuilderAction.addIngredient(name)),
    onRemovedIngredient: (name) => dispatch(burgerBuilderAction.removeIngredient(name)),
    onInitIngredient: () => dispatch(burgerBuilderAction.initState())
})

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))