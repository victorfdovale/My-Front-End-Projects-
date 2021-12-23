import React from 'react'
import { ScreenContainer, Img, InputsContainer} from './StyledSignup'
import TextField from '@material-ui/core/TextField'
import Button  from '@material-ui/core/Button'
import useForm from '../hooks/useForm'
import {useHistory} from 'react-router-dom'
import useUnProtectedPage from '../hooks/useUnprotectedPage'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeed } from '../routes/Coordinator'


const SignUp = () => {
    useUnProtectedPage()
    const [form, onChange, clear] = useForm({username:'', email: '', password: ''})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
        requestSignup()
    }

    const requestSignup = () => {
        const headers = {
            headers:{
                ContentType: 'application/json'
            }
        }
        axios.post (`${BASE_URL}/users/signup`, form, headers)
        .then((res)=> {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            clear()
            goToFeed(history)
        })
        .catch((err)=> {
            console.log(err.response)
        })
    }

    return (
        <ScreenContainer>
            <Img src = 'https://nsfocusglobal.com/wp-content/uploads/2017/01/connected-world.png'/>
            <InputsContainer>
                <form onSubmit = {onSubmitForm}>

                <TextField
                        name = {'username'}
                        value = {form.username}
                        onChange = {onChange}
                        label = 'Nome'
                        fullWidth
                        margin = 'normal'
                        required
                        type = {'name'}/>

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
                        Cadastrar</Button>

                </form>
            </InputsContainer>
        </ScreenContainer>
    )
}

export default SignUp 