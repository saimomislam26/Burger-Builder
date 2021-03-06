import React from 'react'
import BuildControl from './Body'
import { Card, CardHeader, CardFooter, Button, CardBody } from 'reactstrap';

const Items = [
    { item: "Salad", type: "salad" },
    { item: "Cheese", type: "cheese" },
    { item: "Meat", type: "meat" }
]
const Control = props => {
    return (
        <div className="container ml-md-5">
            <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center"
            }}>
                <CardHeader style={{ backgroundColor: "#D70F64" }}><h4>Add Ingredients</h4></CardHeader>
                <CardBody>
                    {
                        Items.map(items => {
                            return (
                                <BuildControl item={items.item}
                                    type={items.type}
                                    key={Math.random()}
                                    added={() => props.ingredientadded(items.type)}
                                    removed={() => props.ingredientRemoved(items.type)} />
                            )
                        })
                    }

                </CardBody>
                <CardFooter>
                    <p>Price:{props.price} BDT</p>
                    <Button style={{ backgroundColor: "#D70F64" }} color="secondary" disabled={!props.purchasable} onClick={props.toggleModal}>Order Now</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
export default Control