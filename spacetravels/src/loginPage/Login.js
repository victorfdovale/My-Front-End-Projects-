import React from "react";
import {Typography, Button, TextField} from '@material-ui/core'
import useForm from '../hooks/useForm'
import './Login.css'
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { goToAdmin } from "../routes/Coordinator";



const Login = () => {
    const history = useHistory()
    const {form, onChange, cleanFields} = useForm({email:'', password:''})
    
    const submitLogin = (event) => {
        event.preventDefault()
        console.log(form)
        cleanFields()
        requestLogin()
    }
    const requestLogin = () => {
        const headers = {
            headers: {
                ContentType: 'application/json'
            }
        }
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-vale-carver/login'
        axios.post(url, form, headers)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            goToAdmin(history)        
        })
        .catch((err) => {
            alert('Usuário ou senha inválidos')
        })
    }


    return (
        <div>
            <Typography variant='h3'>Login</Typography>
            
                <form onSubmit={submitLogin} className="containerInputs">
                    <TextField
                        placeholder="E-mail"
                        name = {'email'}
                        value = {form.email}
                        onChange = {onChange}
                        required
                        type = {'email'}/>
            
                    <TextField
                        placeholder = 'Senha' 
                        name = {'password'}
                        value = {form.password}
                        onChange = {onChange}
                        required
                        type = {'password'}/>
                    <Button type={'submit'} variant='contained' color = {'primary'}>Login</Button>
                
                </form>

            

        </div>
    )
}

export default Login