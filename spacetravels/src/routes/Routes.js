import React from "react" 
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AdminHome from '../adminHomePage/AdminHome'
import ApplicationForm from '../applicationFormPage/ApplicationForm'
import Form from '../applicationFormPage/Form'
import CreateTrip from '../createTripPage/CreateTrip'
import Home from '../homePage/Home'
import Login from '../loginPage/Login'
import TripDetail from '../tripDetailPage/TripDetail'
import './Routes.css'

const Routes = () =>{
    return (
        <div className="containerRoutes">
            <BrowserRouter>
            <Switch>

                <Route exact path = {'/'}>
                    <Home/>
                </Route>

                <Route exact path = {'/admin'}>
                    <AdminHome/>
                </Route>

                <Route exact path = {'/applicationform'}>
                    <ApplicationForm/>
                </Route>

                <Route exact path = {'/create'}>
                    <CreateTrip/>
                </Route>

                <Route exact path = {'/login'}>
                    <Login/>
                </Route>

                <Route exact path = {'/detail/:id'}>
                    <TripDetail/>
                </Route>

                <Route exact path = {'/form/:id'}>
                    <Form/>
                </Route>

            </Switch>
        </BrowserRouter>
        </div>
        
    )
}
export default Routes 