import React from 'react'
import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../Hooks/CustomHooks';
import styled from 'styled-components';
import axios from 'axios';

const ContainerHome = styled.div`
  background: lightgray;
  height: 50px;
  margin-bottom: 15px;
  padding: 5px;
`
const ContainerTitulo = styled.h2`
  margin-top: 10px;
`

const CardTrip = styled.div`
  padding: 10px;
  text-align: center;
  background: white;
  border-radius: 20px;
  -webkit-box-shadow: 7px 7px 20px 0px #000000; 
  box-shadow: 7px 7px 20px 0px #000000;
 
`
const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  margin-top: 40px;
  margin-bottom: 40px;

`
const ContainerButton = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: center;
`


function Admin() {

  const history = useHistory()
  const [tripsList, isLoading, error] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor/trips')
  // const [tripId, setTripId] = useState('')

  const deleteTrip = (tripId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-vale-carver/trips/${tripId}`
    const token = localStorage.getItem('token')
    const headers = {
      headers:{
        auth: token
      }
    }
    
    axios.delete(url, headers)
    .then((res)=>{
      console.log('deletou', res)
      // setTripId(tripId)
    })
    .catch((err)=>{
      console.log(err.response)
  
    })
  }

  const list = tripsList.map((x) => {
    return(
      <CardTrip key = {x.id}>
        <h2>{x.name}</h2>
        <h4>Data: {x.date}</h4>
        <ContainerButton>
          <button onClick={()=> deleteTrip(x.id)}>Deletar viagem</button>
          <button onClick = {()=> history.push(`/admin/trips/${x.id}`)}>Ver Detalhes dessa viagem</button>
        </ContainerButton>
      </CardTrip>
    )
  })


    return (
    <div>
      <ContainerHome>
        <ContainerTitulo>Administrativo</ContainerTitulo>
      </ContainerHome>
          <button onClick = {()=> history.push('/')}>Voltar para Home</button>
          <button onClick = {() => history.push('/admin/create')}>Criar viagens</button>
        <ContainerDiv>
        {list}
      </ContainerDiv>
    </div>
  );
}

export default Admin;

