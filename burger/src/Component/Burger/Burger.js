import React from 'react'
import Ingredient from '../Ingredients/Ingredient'
import './Burger.css'

const Burger = props => {
    let ingredientArr = props.ingredients.map(item => {
        let amountArr = [...Array(item.amount).keys()]
        // console.log(amountArr);
        return amountArr.map(_ => {
            return (
                <Ingredient type={item.type} key={Math.random()} />
            )
        })
    })
    let Arr = ingredientArr.reduce((arr, element) => {
        return arr.concat(element);
    }, [])
    // console.log(ingredientArr);

    if (Arr.length === 0) {
        ingredientArr = <p>Select some item</p>
    }
    return (
        <div className="Burger">
            <Ingredient type="top" />
            {ingredientArr}
            <Ingredient type="bottom" />
        </div>
    )
}

export default Burger;