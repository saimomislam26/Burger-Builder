import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../Redux/actionCreator'
import Order from './order/order'
import Spinner from './Spinner/spinner'

const mapStateToProps = state => {
    return {
        orders: state.orders,
        orderLoading: state.orderLoading,
        orderErr: state.orderErr
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders())
    }
}
class Orders extends Component {
    componentDidMount() {
        { this.props.fetchOrders() }
    }

    componentDidUpdate() {
        console.log(this.props)
    }
    render() {
        let orders = this.props.orders.map(order => {
            return <Order order={order} key={order.id} />
        })
        return (
            <div>
                {this.props.orderLoading ? <Spinner /> : orders}
            </div>
        )

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Orders);