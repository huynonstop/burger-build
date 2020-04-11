import { takeEvery, takeLatest } from 'redux-saga/effects'

import * as authSaga from './auth'
import * as burgerBuilderSaga from './burgerBuilder'
import * as orderSaga from './order'
import * as actionTypes from '../actions/actionTypes'

function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_LOGOUT_SAGA,authSaga.logoutSaga)
    yield takeEvery(actionTypes.AUTH_TIMEOUT_SAGA,authSaga.authTimeoutSaga)
    yield takeEvery(actionTypes.AUTH_USER_SAGA,authSaga.authSaga)
    yield takeEvery(actionTypes.AUTH_CHECK_SAGA,authSaga.authCheckSaga)
}

function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_SATTE_BURGER_SAGA, burgerBuilderSaga.initStateSaga)
}

function* watchOrder() {
    yield takeLatest(actionTypes.PURCHASE_BURGER_SAGA, orderSaga.purchaseBurgerSaga)
    yield takeEvery(actionTypes.FETCH_ORDER_SAGA, orderSaga.fetchOrdersSaga)
}

export {
    watchAuth,
    watchBurgerBuilder,
    watchOrder
}