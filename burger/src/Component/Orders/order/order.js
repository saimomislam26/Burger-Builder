import React from 'react'


const Order = props => {
    let ingredients = props.order.ingredients.map(item => {
        return <span style={{
            border: "1px grey solid",
            borderShadow: "1px 1px #888888",
            padding: "5px",
            marginRight: "10px",
            borderRadius: "5px"
        }} key={item.type}>{item.amount}x<span style={{ textTransform: "capitalize" }}>{item.type}</span></span>
    })
    return (
        <div style={{
            border: "1px grey solid",
            borderShadow: "1px 1px #888888",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "5px"
        }}>
            <p>order id:{props.order.id}</p>
            <p>Delivary Address:{props.order.customer.deliveryAddress}</p>
            {ingredients}
            <hr></hr>
            <p>Total Price:{props.order.price}</p>

        </div>
    )
}

export default Order;