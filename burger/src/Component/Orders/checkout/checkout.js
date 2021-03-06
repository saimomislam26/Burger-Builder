import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import Spinner from '../Spinner/spinner'
import axios from 'axios';
import { resetIngredients } from '../../Redux/actionCreator'

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetIngredients: () => dispatch(resetIngredients())
    }
}
class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "cashOndelivery"
        },
        isLoading: false,
        isModalOpen: false,
        modalmsg: ""

    }
    goBack = () => {
        this.props.history.goBack('/')
    }
    inputChangeHandler = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value,
            }

        })
    }
    submitHandler = () => {
        this.setState({
            isLoading: true
        })
        const order = {
            ingredients: this.props.ingredients,
            customer: this.state.values,
            price: this.props.totalPrice,
            orderTime: new Date()
        }
        axios.post("https://burgerbee-85f4d-default-rtdb.firebaseio.com/orders.json", order)
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalmsg: "ordered successfully"
                    })
                    { this.props.resetIngredients() }
                }
                else {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalmsg: "Something went wrong !order Again"
                    })
                }
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    isModalOpen: true,
                    modalmsg: "An error occured"
                })
            })

    }
    render() {
        let form = (
            <div>
                <h4 style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    boxShadow: "2px 2px #888888",
                    padding: "20px"
                }}>Payment:{this.props.totalPrice} BDT</h4>
                <Form style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    boxShadow: "2px 2px #888888",
                    padding: "20px"
                }}>
                    <FormGroup row>
                        <Label for="exampleText" sm={2}>Address</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="deliveryAddress" id="exampleText" value={this.state.values.deliveryAddress} onChange={(e) => this.inputChangeHandler(e)} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Phone</Label>
                        <Col sm={10}>
                            <Input type="phone" name="phone" id="exampleEmail" placeholder="with a placeholder" value={this.state.values.phone} onChange={(e) => this.inputChangeHandler(e)} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Payment</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect" value={this.state.values.paymentType} onChange={(e) => this.inputChangeHandler(e)}>
                                <option>Cash on Delivery</option>
                                <option>bKash</option>

                            </Input>
                        </Col>
                    </FormGroup>
                    <Button style={{ backgroundColor: "#D70F64" }} className="ml-auto" onClick={this.submitHandler}>Confirm</Button>
                    <Button color="secodary" className="ml-1" onClick={this.goBack}>Cancel</Button>

                </Form>

            </div>
        )

        return (
            <div>
                {this.state.isLoading ? <Spinner /> : form}
                <Modal isOpen={this.state.isModalOpen} >
                    <ModalBody>
                        <p>{this.state.modalmsg}</p>
                        <Button style={{ backgroundColor: "#D70F64" }} className="m-auto" onClick={this.goBack}>OK</Button>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);