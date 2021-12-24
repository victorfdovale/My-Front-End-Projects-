import React from 'react'
import {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`
  background: lightgray;
  height: 50px;
  margin-bottom: 15px;
  padding: 5px;
`
const ContainerTitulo = styled.h2`
  margin-top: 10px;
`
const Details = styled.div`
  background: white;
  margin-left: 25%;
  margin-right: 25%;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 50px;
  border-radius: 20px;
  -webkit-box-shadow: 7px 7px 20px 0px #000000; 
  box-shadow: 7px 7px 20px 0px #000000;
`

const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  margin: 35px;

`
const CardDiv = styled.div`
  padding: 10px;
  text-align: center;
  background-color: white;
  -webkit-box-shadow: 7px 7px 20px 0px #000000; 
  box-shadow: 7px 7px 20px 0px #000000;
  border-radius: 20px;
 
`
const ContainerCandidatos = styled.h2`
  background: white;
  margin-left: 45%;
  margin-right: 45%;
`


function TripDetailPage() {
  const [trip, setTrip] = useState({})
  const [candidate,setCandidate] = useState([])
  const history = useHistory()
  const params = useParams()
  console.log('Aqui é os params', params)
  

  useEffect(()=> {
    const token = localStorage.getItem('token')
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor/trip/${params.id}`
    const headers = {
      headers: {
        auth: token
      }
    }
    axios.get(url, headers)
    .then((res)=>{
      console.log('página detalhes deu bom', res)
      setTrip(res.data.trip)
      setCandidate(res.data.trip.candidates)
     
    })
    .catch((err)=>{
      console.log('página detalhes deu ruim ==>', err.response.data)
    })

  },[])

  

  console.log('Aqui são os candidates', candidate)

  const candidatesList = candidate.map((x) => {
    return(
      <CardDiv key={x}>
        <h3>{x.name}</h3>
        <h4>{x.age}</h4>
        <h4>{x.applicationText}</h4>
        <h4>{x.profession}</h4>
        <h4>{x.country}</h4>
        <button>Aprovar</button>
        <button>Reprovar</button>
      </CardDiv>
    )

  })

  return (
    <div>
      <Container>
        <ContainerTitulo>Detalhes da viagem</ContainerTitulo>
      </Container>
      
      <button onClick = {() => history.push('/')}>Voltar para Home</button>
      <button onClick = {() => history.push('/admin/trips/list')}>Administrativo</button>
      <Details>
        <h3>{trip.name}</h3>
        <h4>{trip.planet}</h4>
        <h4>{trip.description}</h4>
        <h4>Dia: {trip.date}</h4>
        <h4>Duração: {trip.durationInDays} dias</h4>
      </Details>
      <ContainerCandidatos>Candidatos</ContainerCandidatos>
      
      <ContainerCards>
        {candidatesList}
      </ContainerCards>
        

    </div>
  );
  
}

export default TripDetailPage;