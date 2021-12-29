import React from "react";
import './ApplicationForm.css'
import { useRequestData } from "../hooks/useRequestData";
import { Button, Typography, TextField } from "@material-ui/core";
import CardForm from './CardForm'

const ApplicationForm = () => {
    const [data, isLoading, error] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-vale-carver/trips')
    const tripsList = data.map((x) => {
        return <CardForm key={x.id} name={x.name} description = {x.description} date = {x.date} planet = {x.planet} id = {x.id}/>
    })
    
    

    return (
        <div>
            <Typography variant = 'h4'>Lista de destinos</Typography>
            <div className="containerTrips">
                {tripsList}
            </div>
                    
        </div>
    )
}

export default ApplicationForm