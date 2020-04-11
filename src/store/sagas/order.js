import { put } from 'redux-saga/effects'
import { orderAction } from '../actions/index'
import axios from '../../axios-order'

export function* purchaseBurgerSaga(acction) {
    const { orderData, token } = acction.payload
    yield put(orderAction.purchaseBugerStart())
    try {
        const res = yield axios.post('/orders.json?auth=' + token, orderData)
        yield put(orderAction.purchaseBugerSuccess(res.data.name, orderData))
    } catch (err) {
        yield put(orderAction.purchaseBugerFail(err))
    }
}
export function* fetchOrdersSaga(action) {
    const { token, userId } = action.payload
    yield put(orderAction.fetchOrdersStart())
    const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`
    try {
        const res = yield axios.get('/orders.json' + queryParams)
        const fetchedOrders = []
        for (let key in res.data) {
            fetchedOrders.unshift({
                ...res.data[key],
                id: key
            })
        }
        yield put(orderAction.fetchOrdersSuccess(fetchedOrders))
    } catch(err) {
        yield put(orderAction.fetchOrdersFail(err))
    }
}