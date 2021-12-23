import React from 'react'
import { HomePageContainer, DivHome } from './styledHome'

export default class HomePage extends React.Component{

    render(){
        return (
            <HomePageContainer>
                <h1>Labeninjas</h1>
                <h2>O talento certo na hora certa</h2>
                <DivHome>
                    <button onClick = {() => this.props.changePage('Form')}>Quero ser Ninja</button>
                    <button onClick = {() => this.props.changePage('List')}>Contratar um Ninja</button>
                </DivHome>
            </HomePageContainer>
        )
    }
}