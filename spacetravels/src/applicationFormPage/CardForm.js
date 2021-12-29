import React from "react";
import './CardForm.css'
import { Button } from "@material-ui/core";
import {goToForm} from '../routes/Coordinator'
import { useHistory } from "react-router-dom";

const CardForm = (props) => {
    const history = useHistory()
    return (
        <div className="containerCard">
            <h3>{props.name}</h3>
            <h4>{props.description}</h4>
            <p>{props.planet}</p>
            <p>{props.date}</p>
            <Button color='primary' onClick = {()=> goToForm(history, props.id)}> Se inscrever</Button>
        </div>
    )
}

export default CardForm