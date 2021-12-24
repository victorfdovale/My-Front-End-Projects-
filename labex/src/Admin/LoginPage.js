import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const ContainerAdmin = styled.div`
  background: lightgray;
  height: 50px;
  margin-bottom: 15px;
  padding: 5px;
  margin-top: 0;

`
const ContainerTitle = styled.h2`
  margin-top: 8px;
`

const ContainerLogin = styled.div`
  margin-top: 80px;
  display: grid;
  row-gap: 10px;
  margin-left: 35%;
  margin-right: 35%;
  background: white;
  padding: 40px;
  border-radius: 20px;
  -webkit-box-shadow: 7px 7px 20px 0px #000000; 
  box-shadow: 7px 7px 20px 0px #000000;

`
const ButtonLogin = styled.button`
  width: 100px;

`

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }


  const sendLogin = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-vale-carver/login'
    const body = {
      email: email,
      password: password
    }
    axios.post(url, body)
    .then((res)=> {
      localStorage.setItem('token', res.data.token)
      history.push('/admin/trips/list')
      console.log('deu bom', res)

    })
    .catch((err)=> {
      console.log('deu ruim', err.response)
      alert('usuário não encontrado ou senha incorreta')
    })
  }

  const history=useHistory()

  return (
    <div>
        <ContainerAdmin>
          <ContainerTitle>Login Administrativo</ContainerTitle>
          </ContainerAdmin>
        <button onClick = {() => history.push('/')}>Voltar para Home</button>
        <ContainerLogin>
          <input placeholder='E-mail' value = {email} onChange={handleEmail} />
          <input type='password' name={'password'} placeholder='Senha' value={password} onChange={handlePassword} />
          <ButtonLogin onClick={sendLogin}>Entrar</ButtonLogin>
        </ContainerLogin>
        
    </div>
  );
}

export default LoginPage;