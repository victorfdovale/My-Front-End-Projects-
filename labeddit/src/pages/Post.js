import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useProtectedPage from '../hooks/useProtectedPage'
import useRequestData from '../hooks/useRequestData'
import {BASE_URL} from '../constants/urls'
import { ContainerComment } from './StyledPost'
import axios from 'axios'
import useForm from '../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import {Button} from '@material-ui/core'
import { DivComment } from './StyledPost'
import { goToPost } from '../routes/Coordinator'

const Post = (props) => {
    useProtectedPage()
    const params = useParams()
    const history = useHistory()
    console.log("aqui é o params: ", params.id)
    const post = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    console.log("comentários: ", post)

    const [form, onChange, clear] = useForm({body:''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        requestComment()
    }

    const requestComment = () => {
        const headers = {
            headers:{
                ContentType: 'application/json',
                Authorization: localStorage.getItem('token')
            }
        }
        axios.post (`${BASE_URL}/posts/${params.id}/comments`, form, headers)
        .then((res)=> {
            console.log(res)
            clear()
        })
        .catch((err)=> {
            console.log(err.response)
            alert('erro ao criar comentário')
        })
        goToPost(history)
    }

    const comentsList = post.map((x) => {
        return(
            <ContainerComment key = {x.id}>
                <h3>{x.username}</h3>
                <p>{x.body}</p>
                <p>Criado em: {x.createdAt}</p>
                <p>Votos 👍: {x.voteSum}</p>
                <p>Votos do usuário: {x.userVote}</p>
            </ContainerComment>
            
        )
    })
    return (
        <div>
            <h1>Publicação</h1>
            <DivComment>
                <form onSubmit = {onSubmitForm}>
                    
                    <TextField
                        name = {'body'}
                        value = {form.body}
                        onChange = {onChange}
                        label = 'Comentário'
                        fullWidth
                        margin = 'normal'
                        type = {'text'}/>
                    <Button
                            type = {'submit'}
                            color = {'primary'}
                            variant = {'contained'}
                            margin = {'normal'}>
                        Comentar</Button>
                </form>
            </DivComment>
            {comentsList}
        </div>
    )
}

export default Post