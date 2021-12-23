import React from 'react'
import axios from 'axios'
import {BASE_URL, headers} from '../../constants/urls'
import styled from 'styled-components'

const ContainerDetalhes = styled.div`
    border: 1px solid gray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    margin-top: 3%;
    margin-left: 20%;
    box-shadow: 5px 5px 2px gray;
    background-color: lightgray;
    padding: 20px;
`

export default class JobDetailPage extends React.Component{
    state = {
        job: {}
    }
    
    componentDidMount(){
        this.getJob()
    }

    getJob = () => {
        axios.get(`${BASE_URL}/jobs/${this.props.jobId}`, headers)
        .then((res)=>{
            this.setState({job:res.data})
        })
        .catch((err)=> {
            console.log(err.response.data.message)
        })
    }

    render(){
        const paymentList = this.state.job.paymentMethods && this.state.job.paymentMethods.map((x)=> {
            return <li>{x}</li>
        })
        return (
            <ContainerDetalhes>
                <h1>Detalhes do serviço</h1>
                <h3>{this.state.job.title}</h3>
                <p>{this.state.job.description}</p>
                <p>R${this.state.job.price}</p>
                <p>{this.state.job.dueDate}</p>
                <p>Métodos de pagamento</p>
                <ul>
                    {paymentList}
                </ul>
                <button onClick = {()=> this.props.changePage('List')}>Voltar para Lista</button>
            </ContainerDetalhes>
        )
    }
}