import { put } from 'redux-saga/effects'
import { burgerBuilderAction } from '../actions/index'
import axios from '../../axios-order'

export function* initStateSaga(action) {
    yield put(burgerBuilderAction.setLoading(true))
    try {
        let price = yield axios.get('/price.json')
        yield put(burgerBuilderAction.setPrice(price.data))
        let ingredients = yield axios.get('/ingredients.json')
        yield put(burgerBuilderAction.setIngredient(ingredients.data))
    } catch (error) {
        yield put(burgerBuilderAction.fetchIngredientFailed())
    }
    yield put(burgerBuilderAction.setLoading(false))
}