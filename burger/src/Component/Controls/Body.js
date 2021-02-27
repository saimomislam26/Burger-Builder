import React from 'react'
import { Button } from 'reactstrap'
const BuildControl = props => {
    return (
        <div className="d-flex">
            <div className="mr-auto ml-2 mt-3" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {props.item}
            </div>
            <Button className="btn btn-danger m-2" onClick={() => { props.removed() }}>Less</Button>
            <Button className="btn btn-success m-2" onClick={() => { props.added() }}> More</Button>
        </div>
    )
}
export default BuildControl