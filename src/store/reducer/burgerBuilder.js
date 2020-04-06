import * as actionTypes from '../actions/actionTypes'

const initialState = {
    ingredients: null,
    price: null,
    totalPrice: 4,
    error: false,
    loading: false
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
                totalPrice: state.totalPrice + state.price[payload.name]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [payload.name]: state.ingredients[payload.name] - 1
                },
                totalPrice: state.totalPrice - state.price[payload.name]
            }
        case actionTypes.SET_INGREDIENT: 
            let totalPrice = 4
            for (let key in payload.ingredients) {
                totalPrice = totalPrice + payload.ingredients[key] * state.price[key]
            }
            return {
                ...state,
                ingredients: payload.ingredients,
                totalPrice: totalPrice,
                error: null
            }
        case actionTypes.SET_PRICE: 
            return {
                ...state,
                price: payload.price
            }
        case actionTypes.FETCH_INGREDIENT_FAILED:
            return {
                ...state,
                error: true
            }
        case actionTypes.SET_LOADING:
            return {
                ...state,
                loading: payload.status
            }
        default:
            return state
    }
}
