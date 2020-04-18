/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { burgerBuilderAction,orderAction, authAction } from '../../store/actions/index'
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Modal from "../../components/UI/Modal/Modal"
import OrderSumary from "../../components/Burger/OrderSumary/OrderSumary"
import axios from '../../axios-order'
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"

const pStyle = { width: "60%", textAlign: "center", margin: "auto" }
const BurgerBuilder = props => {
    const [isOrdering, setIsOrdering] = useState(false)
    const { isAuth, ingredients, price, loading, error } = props
    useEffect(() => {
        props.onInitIngredient()
    },[])

    const orderHandle = (status) => {
        if(status && !isAuth) {
            props.onSetAuthRedirectPath('/checkout')
            props.history.push("/auth")
        }
        setIsOrdering(status)
    }
    const orderContinue = () => {
        props.onInitPurchase()
        props.history.push('/checkout')
    }
    let orderSumary = null
    let burger = error ? <p style={pStyle}>Oops! Somthing went wrong</p> : <Spinner />
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
                addIngredient={props.onAddedIngredient}
                removeIngredient={props.onRemovedIngredient}
                price={price}
                order={() => orderHandle(true)}
                isAuth={isAuth}
            />
        </>
        orderSumary = <OrderSumary
            price={price}
            continue={orderContinue}
            cancel={() => orderHandle(false)}
            ingredients={ingredients} />
    }

    if (loading) {
        burger = <Spinner />
    }

    return (
        <>
            <Modal show={isOrdering} cancel={() => orderHandle(false)}>
                {orderSumary}
            </Modal>
            {burger}
        </>
    );
}
const mapStateToProps = (state) => ({
    ingredients: state.burgerBuilder.ingredients,
    error: state.burgerBuilder.error,
    loading: state.burgerBuilder.loading,
    price: state.burgerBuilder.totalPrice.toFixed(2),
    isAuth: state.auth.token !== null
})

const mapDispatchToProps = dispatch => ({
    onAddedIngredient: (name) => dispatch(burgerBuilderAction.addIngredient(name)),
    onRemovedIngredient: (name) => dispatch(burgerBuilderAction.removeIngredient(name)),
    onInitIngredient: () => dispatch(burgerBuilderAction.initState()),
    onInitPurchase: () => dispatch(orderAction.purchaseInit()),
    onSetAuthRedirectPath: (path) => dispatch(authAction.setAuthRedirectPath(path))
})

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))