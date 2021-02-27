import React from 'react'
import Top from '../../assets/top.png'
import Cheese from '../../assets/cheese.png'
import Meat from '../../assets/meat.png'
import Salad from '../../assets/salad.png'
import Bottom from '../../assets/bottom.png'
import './Ingredient.css'


const Ingredient = props => {

    let ingredient = null;
    switch (props.type) {
        case 'top':
            ingredient = <div><img src={Top} alt="Bread-top" /></div>
            break;
        case 'salad':
            ingredient = <div><img src={Salad} alt="Salad" /></div>
            break;
        case 'cheese':
            ingredient = <div><img src={Cheese} alt="Cheese" /></div>
            break;
        case 'meat':
            ingredient = <div><img src={Meat} alt="Meat" /></div>
            break;

        case 'bottom':
            ingredient = <div><img src={Bottom} alt="Bread-bottom" /></div>
            break;
        default:
            ingredient = null;
    }

    return (
        <div className="ingredient">
            {ingredient}
        </div>
    )
}

export default Ingredient;