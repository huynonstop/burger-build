import * as actionTypes from '../actions/actionTypes'
import { updateObj } from '../utility'

const initialState = {
    orders: [],
    loading: false,
    purchase: false
}

const purchaseBurgerSuccess = (state,payload) => {
    const newOrder = updateObj(payload.orderData, { id: payload.orderId})
    return {
        ...state,
        loading: false,
        purchase: true,
        orders: [newOrder,...state.orders]
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.PURCHASE_INIT:
            return updateObj(state, { purchase: false })

        case actionTypes.PURCHASE_BURGER_START:
            return updateObj(state, { loading: true })

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state,payload)

        case actionTypes.PURCHASE_BURGER_FAILED:
            return updateObj(state, { loading: false })

        case actionTypes.FETCH_ORDER_START:
            return updateObj(state, { loading: true })

        case actionTypes.FETCH_ORDER_SUCCESS:
            return updateObj(state, { orders: payload.orders,loading: false })

        case actionTypes.FETCH_ORDER_FAILED:
            return updateObj(state, { loading: false })

        default:
            return state
    }
}
