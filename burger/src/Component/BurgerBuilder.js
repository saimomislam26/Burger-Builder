import React from 'react'
import { Component } from 'react'
import Burger from './Burger/Burger'
import Control from './Controls/Control'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Summary from './Summary/Summary'

class BurgerBuilder extends Component {
    state = {
        ingredients: [
            { type: 'salad', amount: 0, price: 20 },
            { type: 'cheese', amount: 0, price: 40 },
            { type: 'meat', amount: 0, price: 80 }
        ],
        totalPrice: 80,
        modalOpen: false,
        purchasable: false
    }

    purchaseOn = ingredient => {
        let amount = 0
        for (let item of ingredient) {
            amount += item.amount
            if (amount > 0) {
                this.setState({ purchasable: true })
            }
            else {
                this.setState({ purchasable: false })
            }
        }

    }

    onCheckoutHandle = () => {
        this.props.history.push('/checkout');
    }


    addIngredientHandle = type => {
        const ingredients = [...this.state.ingredients]
        let newprice = this.state.totalPrice
        for (let item of ingredients) {
            if (item.type === type) {
                item.amount++
                newprice = newprice + item.price
            }
        }

        this.setState({ ingredients: ingredients, totalPrice: newprice })
        this.purchaseOn(ingredients)
    }

    removeIngredientHandle = type => {
        const ingredients = [...this.state.ingredients]
        let newprice = this.state.totalPrice
        for (let item of ingredients) {
            if (item.amount === 0) {

            }
            else if (item.type === type) {
                item.amount--
                newprice = newprice - item.price
            }
        }

        this.setState({ ingredients: ingredients, totalPrice: newprice })
        this.purchaseOn(ingredients)
    }
    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }
    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.state.ingredients} />
                    <Control ingredientadded={this.addIngredientHandle}
                        ingredientRemoved={this.removeIngredientHandle}
                        price={this.state.totalPrice}
                        toggleModal={this.toggleModal}
                        purchasable={this.state.purchasable} />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summary</ModalHeader>
                    <ModalBody>
                        <Summary ingredients={this.state.ingredients} />
                        <p>Price:{this.state.totalPrice}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.onCheckoutHandle} >Checkout</Button>
                        <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>

        )
    }
}

export default BurgerBuilder;