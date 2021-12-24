import React from 'react'
import Form from './PublicArea/Form'
import HomePage from './PublicArea/HomePage'
import Travels from './PublicArea/Travels'
import Admin from './Admin/Admin'
import LoginPage from './Admin/LoginPage'
import TripDetailPage from './Admin/TripDetailPage'
import CreateTripPage from './Admin/CreateTripPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  body{
    background-image: url('https://1.bp.blogspot.com/-ZGXhKeSSFi4/X73IVxMY2bI/AAAAAAAA5lI/x6adzHoL3fkLtF9dUrkEi88t-xQjiqw7wCLcBGAsYHQ/s2560/colorful-planets-chill-scifi-pink-4k-zs-2560x1440.jpg');
    background-size: 100%;
    margin: 0;
    padding: 0;
    font-family: Arial;
  }

  button{
    font-size:15px;
    font-family:Arial;
    width:140px;
    height:50px;
    border-width:1px;
    color:#fff;
    border-color:#18ab29;
    font-weight:bold;
    border-top-left-radius:28px;
    border-top-right-radius:28px;
    border-bottom-left-radius:28px;
    border-bottom-right-radius:28px;
    text-shadow: 1px 1px 0px #2f6627;
    background:#44c767;
    cursor: pointer;
    &:hover {
    background-color: #5cbf2a;
    color: white;
  }
}
`


function App () {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={'/'}>
          <HomePage/>
        </Route>

        <Route exact path={'/travels'}>
          <Travels/>  
        </Route>

        <Route exact path={'/form/:id'}>
          <Form/>
        </Route>

        <Route exact path={'/login'}>
          <LoginPage/>
        </Route>

        <Route exact path={'/admin/trips/list'}>
          <Admin/>
        </Route>    

        <Route exact path={'/admin/trips/:id'}>
          <TripDetailPage/>
        </Route>

        <Route exact path={'/admin/create'}>
          <CreateTripPage/>
        </Route>

      </Switch>
      <GlobalStyle/>
    </BrowserRouter>

    
  )
}
export default App


