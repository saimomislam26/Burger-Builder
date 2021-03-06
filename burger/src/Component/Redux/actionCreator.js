import * as actionTypes from './actionType'
import axios from 'axios'

export const addIngredients = igtype => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        payload: igtype
    }
}

export const removeIngredients = igtype => {
    return {
        type: actionTypes.REMOVE_INGREDIENTS,
        payload: igtype
    }
}

export const updatePurchasable = () => {
    return {
        type: actionTypes.UPDATE_PURCHASABLE
    }
}

export const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS
    }
}

export const loadOrder = orders => {
    return {
        type: actionTypes.LOAD_ORDER,
        payload: orders
    }
}

export const orderLoadFailed = () => {
    return {
        type: actionTypes.ORDER_LOAD_FAILED
    }
}

export const fetchOrders = () => dispatch => {
    axios.get("https://burgerbee-85f4d-default-rtdb.firebaseio.com/orders.json")
        .then(response => {
            dispatch(loadOrder(response.data))
        })
}