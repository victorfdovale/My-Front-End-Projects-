import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './StyledHeader'
import { goToLogin, goToSignup, goToFeed } from '../routes/Coordinator'
import { useHistory } from 'react-router-dom'


const Header = ({rightButtonText, setRightButtonText}) => {
    const token = localStorage.getItem('token')
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem('token')
    }

    const rightButtonAction = () => {
        if(token) {
            logout()
            setRightButtonText('Login')
            goToLogin(history)
        }else{
            goToLogin(history)
        }
    }

    return (
            <AppBar position = 'static'>
                <StyledToolbar>
                    <Button onClick = {()=> goToFeed(history)} color='inherit'>Labeddit</Button>
                    <div>
                        <Button onClick = {rightButtonAction} color='inherit'>{rightButtonText}</Button>
                    </div>
                    
                </StyledToolbar>
            </AppBar>
   
    )
}
export default Header