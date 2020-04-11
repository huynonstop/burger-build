import * as actionTypes from "./actionTypes"
export const addIngredient = (name) => ({
    type: actionTypes.ADD_INGREDIENT,
    payload: { name }
})

export const removeIngredient = (name) => ({
    type: actionTypes.REMOVE_INGREDIENT,
    payload: { name }
})

export const setIngredient = (ingredients) => ({
    type: actionTypes.SET_INGREDIENT,
    payload: { ingredients }
})

export const setPrice = (price) => ({
    type: actionTypes.SET_PRICE,
    payload: { price }
})

export const setLoading = (status) => ({
    type: actionTypes.SET_LOADING,
    payload: { status }
})

export const fetchIngredientFailed = () => ({
    type: actionTypes.FETCH_INGREDIENT_FAILED
})

export const initState = () => {
    return {
        type: actionTypes.INIT_SATTE_BURGER_SAGA
    }
}