import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const JobContainer = styled.div`
    margin-top: 3%;
    display: grid;
    margin-right: 30%;
    margin-left: 30%;
    text-align: center;

    
`
const ButtonCadastro = styled.button`
    width: 100px;
`


export default class CreatejobPage extends React.Component{
    state = {
        title:"",
        description:"",
        price: "",
        dueDate: "",
        paymentMethods:[]
    }

    handleTitle = (event) => {
        this.setState({title:event.target.value})
    }
    handleDescription = (event) => {
        this.setState({description:event.target.value})
    }
    handlePrice = (event) => {
        this.setState({price:event.target.value})
    }
    handleDueDate = (event) => {
        this.setState({dueDate:event.target.value})
    }
    handlePayment = (event) => { 
        let value = Array.from(event.target.selectedOptions, option => option.value) 
        this.setState({paymentMethods: value})
    } 


    createJob = () => {
        const url = `https://labeninjas.herokuapp.com/jobs`
        const body = {
            title: this.state.title,
            description: this.state.description,
            price: Number(this.state.price),
            dueDate: this.state.dueDate,
            paymentMethods: this.state.paymentMethods,
        }
        const headers = {
            headers:{
                Authorization: '3d475e97-ff99-4efb-af1a-8a21d2ce38dd'
            }
        } 
        axios.post(url, body, headers)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log('deu ruim')
            console.log(err.response.data)
        })
        this.setState({title:'', description:'', price:'', dueDate:'', paymentMethods:[]})

    }

    render(){
        return (
            <JobContainer>
                <h1>Cadastre seu serviço</h1>
                <input value = {this.state.title} onChange = {this.handleTitle} placeholder = "Serviço"></input>
                <input value = {this.state.description} onChange = {this.handleDescription} placeholder = "Descrição"></input>
                <input value = {this.state.price} onChange = {this.handlePrice} placeholder = "Preço" type = "number"></input>
                <input value = {this.state.dueDate} onChange = {this.handleDueDate} placeholder = "Prazo" type = "date"></input>
                <select multiple value = {this.state.paymentMethods} onChange = {this.handlePayment}>
                    <option>Cartão de débito</option>
                    <option>Cartão de crédito</option>
                    <option>Paypal</option>
                    <option>Boleto</option>
                    <option>Pix</option>
                </select>
                <ButtonCadastro onClick ={this.createJob} >Cadastrar</ButtonCadastro>

                 
            </JobContainer>
        )
    }
}