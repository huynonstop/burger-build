import React, { Component } from 'react';
import Order from '../../components/Order/Order'
import axios from '../../axios-order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from "../../components/UI/Spinner/Spinner";
class Orders extends Component {
    state = {
        orders: null,
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const orders = []
                for(let key in res.data) {
                    orders.push({...res.data[key],id: key})
                }
                this.setState({ orders: orders ,loading: false})
            })
            .catch(err => {
                this.setState({ loading: false})
            })
    }
    render() {
        return (
            <div>
                {this.state.loading ? <Spinner /> : this.state.orders ? this.state.orders.map(order => {
                    return <Order key={order.id}
                        price={+order.price}
                        ingredients={order.ingredients}
                    />
                }) : null}
            </div>
        );
    }
}

export default withErrorHandler(Orders,axios);