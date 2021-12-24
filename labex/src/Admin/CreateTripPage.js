import React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';

const Container = styled.div`
  background: lightgray;
  height: 50px;
  margin-bottom: 15px;
  padding: 5px;
`
const ContainerTitulo = styled.h2`
  margin-top: 10px;
`
const ContainerInputs = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 70px;
  margin-left: 30%;
  margin-right: 30%;
  background: white;
  padding: 30px;
  border-radius: 20px;
`

function CreateTripPage() {
  const history = useHistory()
  const [name, setName] = useState('')
  const [planet, setPlanet] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState('')

  const createTrip = () => {
    const token = localStorage.getItem('token')
    const headers = {
      headers: {
        auth: token
      }
    }
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-vale-carver/trips`
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: duration
    }
    axios.post (url, body, headers)
    .then((res)=> {
      alert('viagem criada com sucesso')
      // history.push('/admin/trips/list')
      console.log(res)
    })
    .catch((err)=> {
      console.log('deu ruim', err.response.data)
    })
  }

  const handleName = (event) => {
    setName(event.target.value)
  }
  const handlePlanet = (event) => {
    setPlanet(event.target.value)
  }
  const handleDate = (event) => {
    setDate(event.target.value)
  }
  const handleDescription = (event) => {
    setDescription(event.target.value)
  }
  const handleDuration = (event) => {
    setDuration(event.target.value)
  }


  return (
    <div>
      <Container>
        <ContainerTitulo>Crie Viagens aqui</ContainerTitulo>
      </Container>
        <button onClick = {() => history.push('/')}>Voltar para Home</button>
        <button onClick = {() => history.push('/admin/trips/list')}>Administrativo</button>
        <ContainerInputs>
          <input placeholder='nome' value = {name} onChange={handleName}></input>
          <select value = {planet} onChange={handlePlanet}>
            <option>Escolha um planeta</option>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Terra</option>
            <option>Marte</option>
            <option>Jupiter</option>
            <option>Saturno</option>
          </select>
          <input placeholder='Descrição' value={description} onChange={handleDescription}></input>
          <input placeholder='Data' type='date' value={date} onChange={handleDate}></input>
          <input required type='number' placeholder='Duração em dias' value={duration} onChange={handleDuration}></input>
          <button onClick={createTrip}>Criar viagem</button>
        </ContainerInputs>
    </div>
  );
}

export default CreateTripPage;