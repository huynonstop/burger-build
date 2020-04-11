import { put, all } from 'redux-saga/effects'
import { burgerBuilderAction } from '../actions/index'
import axios from '../../axios-order'

export function* initStateSaga(action) {
    yield put(burgerBuilderAction.setLoading(true))
    try {
        const [price, ingredients] = yield all([
            axios.get('/price.json'),
            axios.get('/ingredients.json')
        ])
        yield put(burgerBuilderAction.setPrice(price.data))
        yield put(burgerBuilderAction.setIngredient(ingredients.data))
    } catch (error) {
        yield put(burgerBuilderAction.fetchIngredientFailed())
    }
    yield put(burgerBuilderAction.setLoading(false))
}