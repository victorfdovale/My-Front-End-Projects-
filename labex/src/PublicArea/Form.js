import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'

const ContainerHome = styled.div`
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
  row-gap: 20px;
  margin-top: 40px;
  margin-right: 30%;
  margin-left: 30%;
  padding: 20px;
  background: white;
  border-radius: 20px;
  
`

function Form(props) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [application, setApplication] = useState('')
  const [profession, setProfession] = useState('')
  const [country, setCountry] = useState('')
  const history = useHistory()
  const params = useParams()
  console.log(params)
  console.log('o params.id é', params.id)
  
  const applyForm = () => {
     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor/trips/${params.id}/apply`
     const body = {
       name: name,
       age: age,
       applicationText: application,
       profession: profession,
       country: country 
     }
     const headers = {
       headers:{
         ContentType: 'application/json'
       }
     }

    axios.post(url, body, headers)
    .then((res)=>{
      console.log(res)
      alert('Aplicação registrada com sucesso')
        
    })
    .catch((err)=>{
      console.log(err.response.data)
        
    })
    setName('')
    setAge('')
    setApplication('')
    setProfession('')
    setCountry('')
}

  const handleName = (event) => {
    setName(event.target.value)
  }
  const handleAge = (event) => {
    setAge(event.target.value)
  }
  const handleApplication = (event) => {
    setApplication(event.target.value)
  }
  const handleProfession = (event) => {
    setProfession(event.target.value)
  }
  const handleCountry = (event) => {
    setCountry(event.target.value)
  }

  
  return (
    <div>
      <ContainerHome>
        <ContainerTitulo>Formulário</ContainerTitulo>
      </ContainerHome>
      <button onClick = {()=> history.push('/')}>Voltar para Home</button>
      <ContainerInputs>
        <h2>Informe seus dados</h2>
        <input placeholder = 'Nome' value={name} onChange ={handleName} ></input>
        <input placeholder = 'Idade' value={age} onChange ={handleAge} ></input>
        <input placeholder = 'Texto de aplicação' value={application} onChange ={handleApplication} ></input>
        <input placeholder = 'Profissão' value={profession} onChange ={handleProfession} ></input>
        <input placeholder = 'País' value={country} onChange ={handleCountry} ></input>
        <button onClick = {applyForm}>Se inscrever</button>
      </ContainerInputs>
      
    </div>
  );
}

export default Form;
