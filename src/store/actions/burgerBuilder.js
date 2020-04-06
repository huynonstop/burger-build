import * as actionTypes from "./actionTypes"

export const addIngredient = (name) => ({
    type: actionTypes.ADD_INGREDIENT,
    payload: { name: name }
})

export const removeIngredient = (name) => ({
    type: actionTypes.REMOVE_INGREDIENT,
    payload: { name: name }
})