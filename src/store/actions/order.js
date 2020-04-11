import * as actionTypes from "./actionTypes"

export const purchaseBugerSuccess = (id, orderData) => ({
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    payload : {
        orderId: id,
        orderData: orderData
    }
})

export const purchaseBugerFail = (err) => ({
    type: actionTypes.PURCHASE_BURGER_FAILED,
    payload: {error: err}
}) 

export const purchaseBugerStart = () => ({
    type: actionTypes.PURCHASE_BURGER_START
})

export const purchaseBuger = (orderData,token) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SAGA,
        payload: {
            orderData,
            token
        }
    }
}
export const purchaseInit = () => ({
    type: actionTypes.PURCHASE_INIT
})

export const fetchOrdersSuccess = (orders) => ({
    type: actionTypes.FETCH_ORDER_SUCCESS,
    payload: {
        orders
    }
})

export const fetchOrdersFail = (err) => ({
    type: actionTypes.FETCH_ORDER_FAILED,
    payload: { error: err }
}) 

export const fetchOrdersStart = () => ({
    type: actionTypes.FETCH_ORDER_START
})

export const fetchOrders = (token,userId) => {
    return {
        type: actionTypes.FETCH_ORDER_SAGA,
        payload: {
            token,
            userId
        }
    }
}