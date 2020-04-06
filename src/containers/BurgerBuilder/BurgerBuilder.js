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
        isOrdering: false,
        loading: false,
        error: null
    };
    // componentDidMount() {
    //     axios.get('/ingredients.json')
    //         .then(res => {
    //             this.setState({ingredients: res.data})
    //         })
    //         .catch(err => {
    //             this.setState({error : true})
    //         })
    //     axios.get('/price.json')
    //         .then(res => {
    //             this.setState({ PRICE: res.data })
    //         })
    //         .catch(err => {
    //             this.setState({ error: true })
    //         })
    // }
    orderHandle = (status) => {
        this.setState({ isOrdering: status })
    }
    orderContinue = () => {
        this.props.history.push('/checkout')
    }
    render() {
        const { ingredients, price } = this.props
        let orderSumary = null
        let burger = this.state.error ? <p style={{ width: "60%", textAlign: "center", margin: "auto" }}>Oops! Somthing went wrong</p> : <Spinner />
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

        if (this.state.loading) {
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
    price: state.totalPrice.toFixed(2)
})

const mapDispatchToProps = dispatch => ({
    onAddedIngredient: (name) => dispatch(burgerBuilderAction.addIngredient(name)),
    onRemovedIngredient: (name) => dispatch(burgerBuilderAction.removeIngredient(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))