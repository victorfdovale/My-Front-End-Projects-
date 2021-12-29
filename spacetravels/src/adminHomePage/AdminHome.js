import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useRequestData } from "../hooks/useRequestData";
import CardTrip from "./CardTrip";
import './AdminHome.css'
import { useHistory } from "react-router-dom";
import { goToCreate } from "../routes/Coordinator";

const AdminHome = () => {
    const history = useHistory()
    const [data, isLoading, error] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-vale-carver/trips')
    const tripsList = data.map((x) => {
        return <CardTrip key = {x.id} name = {x.name} description = {x.description} durationInDays = {x.durationInDays} planet = {x.planet} date = {x.date} id = {x.id}/>
    })
    
    return (
        <div>
            <Typography variant = 'h4'>Administrativo</Typography>
            <Button color = 'primary' variant='contained' onClick = {()=> goToCreate(history)}>Criar Viagens</Button>
            <div className="listCards">
                {tripsList}
            </div>
            
        </div>
    )
}

export default AdminHome