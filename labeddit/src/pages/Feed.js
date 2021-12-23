import React from 'react'
import {Button} from '@material-ui/core'
import useProtectedPage from '../hooks/useProtectedPage'
import useRequestData from '../hooks/useRequestData'
import { BASE_URL } from '../constants/urls'
import CardFeed from '../components/CardFeed'
import useForm from '../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import { goToFeed } from '../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import { PostContainer } from './StyledFeed'
import { Typography } from '@material-ui/core'
import { goToPost } from '../routes/Coordinator'

const Feed = () => {
    const [form, onChange, clear] = useForm({title: '', body: ''})
    const feed = useRequestData([], `${BASE_URL}/posts`)
    const history = useHistory()
    console.log(feed)
    useProtectedPage()

    const onClickCard = (id) => {
        goToPost(history, id)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        requestPost()
    }

    const requestPost = () => {
        const headers = {
            headers:{
                ContentType: 'application/json',
                Authorization: localStorage.getItem('token')
            }
        }
        axios.post (`${BASE_URL}/posts`, form, headers)
        .then((res)=> {
            console.log(res)
            clear()
            goToFeed(history)
        })
        .catch((err)=> {
            console.log(err.response)
            alert('erro ao criar Post')
        })
    }

    const postCards = feed.map((x)=>{
        return ( <CardFeed
             key = {x.id}
              username = {x.username} 
              title = {x.title} 
              body = {x.body}
              commentCount = {x.commentCount}
              onClick = {() => onClickCard(x.id)} 
              />
        )
    
    })
    return (
        <div>
    
            <PostContainer>
            <Typography variant="h4" component="div"> Diga algo a seus amigos!</Typography>
                <form onSubmit = {onSubmitForm}>
                    <TextField
                        name = {'title'}
                        value = {form.title}
                        onChange = {onChange}
                        label = 'Título'
                        fullWidth
                        margin = 'normal'
                        type = {'text'}/>
            
                    <TextField
                        name = {'body'}
                        value = {form.body}
                        onChange = {onChange}
                        label = 'Corpo'
                        fullWidth
                        margin = 'normal'
                        type = {'text'}/>
                    <Button
                            type = {'submit'}
                            color = {'primary'}
                            variant = {'contained'}
                            margin = {'normal'}>
                        Compartilhar</Button>
                </form>
            </PostContainer>
            {postCards}
        </div>
    )
}

export default Feed