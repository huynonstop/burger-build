import * as actionTypes from "./actionTypes"
import axios from '../../axios-order'
export const addIngredient = (name) => ({
    type: actionTypes.ADD_INGREDIENT,
    payload: { name: name }
})

export const removeIngredient = (name) => ({
    type: actionTypes.REMOVE_INGREDIENT,
    payload: { name: name }
})

export const setIngredient = (ingredients) => ({
    type: actionTypes.SET_INGREDIENT,
    payload : {ingredients: ingredients}
})

export const setPrice = (price) => ({
    type: actionTypes.SET_PRICE,
    payload : {price: price}
})

export const setLoading = (status) => ({
    type: actionTypes.SET_LOADING,
    payload: {status: status}
})

export const fetchIngredientFailed = () => ({
    type: actionTypes.FETCH_INGREDIENT_FAILED
})

export const fetchIngredient = (url = '/ingredients.json') => {
    return dispatch => {
        dispatch(setLoading(true))
        axios.get(url)
            .then(res => {
                dispatch(setIngredient(res.data))
            })
            .catch(err => {
                dispatch(fetchIngredientFailed())
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}
export const initState = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        try {
            let price = await axios.get('/price.json')
            dispatch(setPrice(price.data))
            let ingredients = await axios.get('/ingredients.json')
            dispatch(setIngredient(ingredients.data))
        } catch (error) {
            dispatch(fetchIngredientFailed())
        }
        dispatch(setLoading(false))
    }
}