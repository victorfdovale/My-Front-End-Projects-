import React from 'react'
import { useHistory } from "react-router-dom"
import styled from 'styled-components';

const ContainerHome = styled.div`
  background: lightgray;
  height: 50px;
  margin-bottom: 15px;
  padding: 5px;
`
const ContainerTitulo = styled.h2`
  margin-top: 10px;
`
const DivText = styled.div`
  text-align: center;
  padding: 5px;
  
`

const ContainerButton = styled.div`
  display: flex;
  margin-left: 27%;
  column-gap: 20px;
`
const DivContainer = styled.div`
  margin-top: 10%;
  margin-left: 25%;
  margin-right: 25%;
  background: white;
  padding-bottom: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 7px 7px 20px 0px #000000; 
  box-shadow: 7px 7px 20px 0px #000000;
  
`


function HomePage() {
  const history = useHistory()



  return (
    <div>
      <ContainerHome>
        <ContainerTitulo>HomePage</ContainerTitulo>
      </ContainerHome>
      <DivContainer>
        <DivText>
          <h3>Seja bem vindo(a) ao LabeX!</h3>
          <h4>O Site de viagens espaciais onde você pode marcar sua viagens pelos planetas do sistema solar e realizar seu Sonho!</h4>
        </DivText>
        <ContainerButton>
          <button onClick = {()=> history.push("/travels")}>Ir para viagens</button>
          <button onClick = {()=> history.push("/login")}>Login Administrativo</button>
        </ContainerButton>
          
      </DivContainer>
     
    </div>
  );
}

export default HomePage;
