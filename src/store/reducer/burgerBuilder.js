import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0
    },
    totalPrice: 4
}

const PRICE = {
    salad: 1,
    bacon: 2,
    meat: 3,
    cheese: 4   
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [payload.name]: state.ingredients[payload.name] + 1
                },
                totalPrice: state.totalPrice + PRICE[payload.name]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [payload.name]: state.ingredients[payload.name] - 1
                },
                totalPrice: state.totalPrice - PRICE[payload.name]
            }
        case actionTypes.RESET_INGREDIENT: 
            return {
                ...initialState
            }
        default:
            return state
    }
}
