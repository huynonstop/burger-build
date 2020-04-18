/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {connect} from 'react-redux'

import {orderAction} from '../../store/actions/index'
import Order from '../../components/Order/Order'
import axios from '../../axios-order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from "../../components/UI/Spinner/Spinner";
const Orders = (props) => {
    useEffect(() => {
        props.onFetchOrder(props.token,props.userId)
    },[])
    return (
        <div>
            {props.loading ? <Spinner /> : props.orders ? props.orders.map(order => {
                return <Order key={order.id}
                    id={order.id}
                    price={+order.price}
                    ingredients={order.ingredients}
                />
            }) : null}
        </div>
    );
}

const mapStateToProps = (state) => ({
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
})

const mapDispatchToProps = (dispatch) => ({
    onFetchOrder: (token, userId) => dispatch(orderAction.fetchOrders(token, userId))
})

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios));