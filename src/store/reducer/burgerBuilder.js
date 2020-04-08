import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../utility'

const initialState = {
    ingredients: null,
    price: null,
    totalPrice: 4,
    error: false,
    loading: false,
    building: false
}

const addIngredient = (state, payload) => ({
    ...state,
    ingredients: {
        ...state.ingredients,
        [payload.name]: state.ingredients[payload.name] + 1,
    },
    totalPrice: state.totalPrice + state.price[payload.name],
    building: true
})

const removeIngredient = (state, payload) => ({
    ...state,
    ingredients: {
        ...state.ingredients,
        [payload.name]: state.ingredients[payload.name] - 1
    },
    totalPrice: state.totalPrice - state.price[payload.name],
    building: true
})

const setIngredient = (state, payload) => {
    let totalPrice = 4
    for (let key in payload.ingredients) {
        totalPrice = totalPrice + payload.ingredients[key] * state.price[key]
    }
    return {
        ...state,
        ingredients: payload.ingredients,
        totalPrice: totalPrice,
        error: false,
        building: false
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_INGREDIENT:
            // const updatedIngredient = { [payload.name]: state.ingredients[payload.name] + 1 }
            // const updatedIngredients = updateObj(state.ingredients, updatedIngredient)
            // const updatedState = {
            //     ingredients: updatedIngredients,
            //     totalPrice: state.totalPrice + state.price[payload.name]
            // }
            // return updateObj(state, updatedState)
            return addIngredient(state, payload)
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, payload)
        case actionTypes.SET_INGREDIENT:
            return setIngredient(state, payload)
        case actionTypes.SET_PRICE:
            return updateObj(state, { price: payload.price })
        case actionTypes.FETCH_INGREDIENT_FAILED:
            return updateObj(state, { error: true })
        case actionTypes.SET_LOADING:
            return updateObj(state, { loading: payload.status })
        default:
            return state
    }
}
