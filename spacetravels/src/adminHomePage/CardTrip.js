import React from "react";
import './CardTrip.css'
import { Button } from "@material-ui/core";
import {goToDetail} from '../routes/Coordinator'
import { useHistory } from "react-router-dom";

const CardTrip = (props) => {
    const history = useHistory()
    return (
        <div className="containerCard">
            <h3>{props.name}</h3>
            <h4>{props.description}</h4>
            <p>{props.duarationInDays}</p>
            <p>{props.planet}</p>
            <p>{props.date}</p>
            <Button color='primary' onClick = {()=> goToDetail(history, props.id)}> Ver detalhes</Button>
        </div>
    )
}

export default CardTrip