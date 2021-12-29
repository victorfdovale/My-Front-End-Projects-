import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography } from "@material-ui/core";
import CardCandidate from "./CardCandidate";
 
const TripDetailPage = () => {
    const [trip, setTrip] = useState({})
    const [candidate, setCandidate] = useState([])
    const [approved, setApproved] = useState([])
    
    const params = useParams()
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-vale-carver/trip/${params.id}`
    const token = localStorage.getItem('token')
    const headers = {
        headers:{
            auth: token
        }
    }
    useEffect (()=> {
        axios.get(url, headers)
        .then((res) => {
            console.log( 'deu bom', res)
            setTrip(res.data.trip)
            setCandidate(res.data.trip.candidates)
            setApproved(res.data.trip.approved)
        })
        .catch((err) => {
            console.log('deu ruim viado', err.response)
        })

    },[])


    console.log('esse é o trips: ', trip)
    console.log('esse é  candidates', candidate)

    const listCandidates = candidate.map((x) => {
        return <CardCandidate key = {x.id} applicationText = {x.applicationText} profession = {x.profession} age = {x.age} name = {x.name} country = {x.country} id = {x.id}/>
    })

    return (
        <div>
            
            <Typography variant = 'h4'>{trip.name}</Typography>
            <Typography variant = 'h6'>{trip.description}</Typography>
            <Typography variant = 'h6'>Data: {trip.date}</Typography>
            <Typography variant = 'h6'>Planeta: {trip.planet}</Typography>
            <Typography variant = 'h6'>Duração: {trip.durationInDays} dias</Typography>
             <Typography variant = 'h6'> Número de candidatos: {candidate.length}</Typography>
            <Typography variant = 'h6'> Número de aprovados: {approved.length}</Typography> 
            {listCandidates}
        </div>
    )
}

export default TripDetailPage