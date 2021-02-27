import React from 'react'
import BurgerBuilder from './Component/BurgerBuilder';
import Header from './Header/Header';
import Orders from './Component/Orders/orders'
import Checkout from './Component/Orders/checkout/checkout'
import { Route } from 'react-router-dom'

const Main = props => {
    return (
        <div>
            <Header />
            <div className="container">
                <Route path="/orders" component={Orders} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/" exact component={BurgerBuilder} />

            </div>
        </div>
    );

}

export default Main;