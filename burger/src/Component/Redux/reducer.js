//import * as actionTypes from './actionType'
// const INITIAL_STATE = {
//     ingredients: [
//         { type: 'salad', amount: 0, price: 20 },
//         { type: 'cheese', amount: 0, price: 40 },
//         { type: 'meat', amount: 0, price: 80 }
//     ],
//     totalPrice: 80,
//     purchasable: false
// }

// export const reducer = (state = INITIAL_STATE, action) => {
//     const ingredients = [...state.ingredients]
//     let prices
//     switch (action.type) {
//         case actionTypes.ADD_INGREDIENTS:
//             for (let item of ingredients) {
//                 if (item.type === action.payload) {
//                     item.amount++
//                     prices = item.price
//                 }
//             }

//             return {
//                 ...state,
//                 ingredients: ingredients,
//                 totalPrice: state.totalPrice + prices
//             }
//         case actionTypes.REMOVE_INGREDIENTS:
//             for (let item of ingredients) {
//                 if (item.amount === 0) {
//                     return state
//                 }
//                 else if (item.type === action.payload) {
//                     item.amount--
//                     prices = item.price
//                 }
//             }
//             return {
//                 ...state,
//                 ingredients: ingredients,
//                 totalPrice: state.totalPrice - prices
//             }

//         case actionTypes.UPDATE_PURCHASABLE:
//             const sum = ingredients.reduce((sum, element) => {
//                 return sum + element.amount
//             }, 0)

//             return {
//                 ...state,
//                 purchasable: sum > 0
//             }

//         default:
//             return state;
//     }
// }

import * as actionTypes from './actionType';

const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 40,
    meat: 90,
}

const INITIAL_STATE = {
    ingredients: [
        { type: 'salad', amount: 0 },
        { type: 'cheese', amount: 0 },
        { type: 'meat', amount: 0 },
    ],
    orders: [],
    orderLoading: true,
    orderErr: false,
    totalPrice: 80,
    purchasable: false,
}

export const reducer = (state = INITIAL_STATE, action) => {
    const ingredients = [...state.ingredients];
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS:
            for (let item of ingredients) {
                if (item.type === action.payload) item.amount++;
            }
            return {
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload],
            }
        case actionTypes.REMOVE_INGREDIENTS:
            for (let item of ingredients) {
                if (item.type === action.payload) {
                    if (item.amount <= 0) return state;
                    item.amount--;
                }
            }
            return {
                ...state,
                ingredients: ingredients,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload],
            }
        case actionTypes.UPDATE_PURCHASABLE:
            const sum = state.ingredients.reduce((sum, element) => {
                return sum + element.amount;
            }, 0)
            return {
                ...state,
                purchasable: sum > 0,
            }
        case actionTypes.RESET_INGREDIENTS:
            return {
                ...state,
                ingredients: [
                    { type: 'salad', amount: 0 },
                    { type: 'cheese', amount: 0 },
                    { type: 'meat', amount: 0 },
                ],
                totalPrice: 80,
                purchasable: false,
            }
        case actionTypes.LOAD_ORDER:
            const orders = [];
            for (let key in action.payload) {
                orders.push({
                    ...action.payload[key],
                    id: key
                })
            }
            return {
                ...state,
                orders: orders,
                orderLoading: false
            }
        default:
            return state;
    }

}