import React from 'react'
import { ScreenContainer, Img, InputsContainer, SignupButtonContainer } from './StyledLogin'
import TextField from '@material-ui/core/TextField'
import Button  from '@material-ui/core/Button'
import useForm from '../hooks/useForm'
import {useHistory} from 'react-router-dom'
import { goToSignup, goToFeed } from '../routes/Coordinator'
import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import useUnProtectedPage from '../hooks/useUnprotectedPage'


const Login = ({rightButtonText, setRightButtonText}) => {
    useUnProtectedPage()
    const [form, onChange, clear] = useForm({email: '', password: ''})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        requestLogin(setRightButtonText)
    }

    const requestLogin = (setRightButtonText) => {
        const headers = {
            headers:{
                contentType: 'application/json'
            }
        }
        axios.post (`${BASE_URL}/users/login`, form, headers)
        .then((res)=> {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            clear()
            goToFeed(history)
            setRightButtonText('Logout')
        })
        .catch((err)=> {
            alert('Usuário ou senha inválidos')
        })
    }

    return (
        <ScreenContainer>
            <Img src = 'https://nsfocusglobal.com/wp-content/uploads/2017/01/connected-world.png'/>
            <InputsContainer>
                <form onSubmit = {onSubmitForm}>
                    <TextField
                        name = {'email'}
                        value = {form.email}
                        onChange = {onChange}
                        label = 'E-mail'
                        fullWidth
                        margin = 'normal'
                        required
                        type = {'email'}/>
            
                    <TextField
                        name = {'password'}
                        value = {form.password}
                        onChange = {onChange}
                        label = 'Senha'
                        fullWidth
                        margin = 'normal'
                        required
                        type = {'password'}/>

                    <Button
                        type = {'submit'}
                        color = {'primary'}
                        variant={'contained'}
                        margin = {'normal'}
                    >
                        Fazer Login</Button>
                    <SignupButtonContainer>
                        <Button onClick = {()=> goToSignup(history)}
                            color = {'primary'}
                            variant = {'text'}
                            margin = {'normal'}>
                        Criar conta</Button>
                    </SignupButtonContainer>
                </form>
            </InputsContainer>
        </ScreenContainer>
    )
}

export default Login