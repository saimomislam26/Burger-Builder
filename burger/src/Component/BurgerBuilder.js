import React from 'react'
import { Component } from 'react'
import Burger from './Burger/Burger'
import Control from './Controls/Control'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Summary from './Summary/Summary'
import { connect } from 'react-redux'
import { addIngredients, removeIngredients, updatePurchasable } from '../Component/Redux/actionCreator'

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addIngredients: (igtype) => dispatch(addIngredients(igtype)),
        removeIngredients: (igtype) => dispatch(removeIngredients(igtype)),
        updatePurchasable: () => dispatch(updatePurchasable())
    }
}
class BurgerBuilder extends Component {
    state = {
        modalOpen: false,
    }


    onCheckoutHandle = () => {
        this.props.history.push('/checkout');
    }


    addIngredientHandle = type => {
        this.props.addIngredients(type)
        this.props.updatePurchasable()
    }


    removeIngredientHandle = type => {
        this.props.removeIngredients(type)
        updatePurchasable()
    }
    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }
    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.props.ingredients} />
                    <Control ingredientadded={this.addIngredientHandle}
                        ingredientRemoved={this.removeIngredientHandle}
                        price={this.props.totalPrice}
                        toggleModal={this.toggleModal}
                        purchasable={this.props.purchasable} />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summary</ModalHeader>
                    <ModalBody>
                        <Summary ingredients={this.props.ingredients} />
                        <p>Price:{this.props.totalPrice}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ backgroundColor: "#D70F64" }} color="success" onClick={this.onCheckoutHandle} >Checkout</Button>
                        <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);