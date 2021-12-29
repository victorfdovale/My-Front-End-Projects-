import React from "react";
import './ApplicationForm.css'
import axios from 'axios'
import useForm from "../hooks/useForm"
import { Button, Typography, TextField } from "@material-ui/core";
import { useParams, useHistory} from "react-router-dom"
import {goToHome} from '../routes/Coordinator'

const Form = () => {
    const {form, onChange, cleanFields} = useForm({name:'', age:'', applicationText: '', profession: '', country: ''})
    const params = useParams()
    const history = useHistory()
    const submitForm = (event) => {
        event.preventDefault()
        console.log(form)
        cleanFields()
        applyToTrip()
    }


    const applyToTrip = () =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/${params.id}/apply?victor-vale-carver `
        const headers = {
            headers: {
                contentType: 'application/json'
            }
        }
        axios.post(url, form, headers)
        .then((res) => {
            alert('candidatura efetuada com sucesso!')
            goToHome(history)
        })
        .catch((err) => {
            console.log(err.response)
        })
    
    }

    return (
        <div>
            

            <form onSubmit={submitForm} className="containerInputs">
                <TextField
                    placeholder="Nome"
                    name = {'name'}
                    value = {form.name}
                    onChange = {onChange}
                    required/>
            
                <TextField
                    placeholder = 'idade' 
                    name = {'age'}
                    value = {form.age}
                    onChange = {onChange}
                    required
                    type = {'number'}/>
                <TextField
                    placeholder = 'por que você quer ir?' 
                    name = {'applicationText'}
                    value = {form.applicationText}
                    onChange = {onChange}
                    required/>
                    
                <TextField
                    placeholder = 'Profissão' 
                    name = {'profession'}
                    value = {form.profession}
                    onChange = {onChange}
                    required/>
                <TextField
                    placeholder = 'Pais' 
                    name = {'country'}
                    value = {form.country}
                    onChange = {onChange}
                    required/>

                    <Button type={'submit'} variant='contained' color = {'primary'}>Aplicar</Button>
            </form>               
        </div>
    )
}

export default Form