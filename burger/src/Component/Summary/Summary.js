import React from 'react'

const Summary = props => {
    const ingredients = props.ingredients.map(item => {
        return (
            <li key={item.type}>
                <p><span style={{ textTransform: "capitalize" }}>{item.type}</span>: {item.amount}</p>
            </li>
        )
    })
    return (
        <div>
            <ul>
                {ingredients}
            </ul>
        </div>
    )
}

export default Summary;