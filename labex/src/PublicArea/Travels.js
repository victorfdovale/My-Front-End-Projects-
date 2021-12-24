import React from 'react'
import { useRequestData } from '../Hooks/CustomHooks';
import styled from 'styled-components';
import { useHistory } from "react-router-dom"

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
  background-color: white;
  -webkit-box-shadow: 7px 7px 20px 0px #000000; 
  box-shadow: 7px 7px 20px 0px #000000;
  border-radius: 20px;
 
`
const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;

`

function Travels(props) {
  const history = useHistory()
  const [tripsList, isLoading, error] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor/trips')
  const list = tripsList.map((x) => {
    return(
      <CardTrip key = {x.id}>
        <h2>{x.name}</h2>
        <h4>{x.description}</h4>
        <h4>Planeta: {x.planet}</h4>
        <h4>Data: {x.date}</h4>
        <h4>Duração: {x.durationInDays} dias</h4>
        <button onClick = {()=> history.push(`/form/${x.id}`)}>Se inscrever nessa Viagem</button>
      </CardTrip>
    )
  })

  return (
    <div>
      <ContainerHome>
         <ContainerTitulo>Viagens Disponíveis</ContainerTitulo>
      </ContainerHome>
     
      <button onClick = {()=> history.push('/')}>Voltar para Home</button>
      <ContainerDiv>
        {list}
      </ContainerDiv>
      
    </div>
  );
}

export default Travels;
