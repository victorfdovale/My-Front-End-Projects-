import {Button, Typography} from '@material-ui/core'
import './Home.css'
import React from "react";
import { useHistory } from 'react-router-dom';
import {goToApplicationForm, goToLogin} from '../routes/Coordinator'


const Home = () => {
    const history = useHistory()
    return (
        <div>
          <Typography variant='h3'>Bem vindo ao Space Travels!</Typography>
          <Typography variant='h6'>Aqui você encontrará a viagem dos seus sonhos!</Typography>
          <div className='containerButtons'>
              <Button variant='contained' color='primary' onClick={()=> goToApplicationForm(history)}>Quero viajar</Button>
              <Button variant='outlined' color='primary' onClick={()=> goToLogin(history)}>Admin</Button>

              

            
          </div>

        </div>
    )
}

export default Home