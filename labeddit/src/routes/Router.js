import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Feed from "../pages/Feed";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Signup from "../pages/Signup";
import ErrorPage from "../pages/ErrorPage"

const Router = ({rightButtonText, setRightButtonText}) => {
    return (
      
            <Switch>
                <Route exact path={'/login'}>
                    <Login rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
                </Route>

                <Route exact path={'/'}>
                    <Feed/>
                </Route>

                <Route exact path={'/post/:id'}>
                    <Post/>
                </Route>

                <Route exact path={'/signup'}>
                    <Signup/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>

    )
}

export default Router