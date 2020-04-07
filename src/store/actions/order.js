import * as actionTypes from "./actionTypes"
import axios from '../../axios-order'

export const purchaseBugerSuccess = (id, orderData) => ({
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    payload : {
        orderId: id,
        orderData: orderData
    }
})

export const purchaseBugerFail = (error) => ({
    type: actionTypes.PURCHASE_BURGER_FAILED,
    payload: {error: error}
}) 

export const purchaseBugerStart = () => ({
    type: actionTypes.PURCHASE_BURGER_START
})

export const purchaseBuger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBugerStart())
        axios.post('/orders.json', orderData)
            .then(res => {
                dispatch(purchaseBugerSuccess(res.data.name, orderData))
            })
            .catch(err => {
                dispatch(purchaseBugerFail(err))
            })
    }
}
export const purchaseInit = () => ({
    type: actionTypes.PURCHASE_INIT
})

export const fetchOrdersSuccess = (orders) => ({
    type: actionTypes.FETCH_ORDER_SUCCESS,
    payload: {
        orders: orders
    }
})

export const fetchOrdersFail = (error) => ({
    type: actionTypes.FETCH_ORDER_FAILED,
    payload: { error: error }
}) 

export const fetchOrdersStart = () => ({
    type: actionTypes.FETCH_ORDER_START
})

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = []
                for(let key in res.data) {
                    fetchedOrders.unshift({
                        ...res.data[key],
                        id: key
                    })
                }
                dispatch(fetchOrdersSuccess(fetchedOrders))
            })
            .catch(err => {
                dispatch(fetchOrdersFail(err))
            })
    }
}