import React from 'react'
import JobCard from '../../components/JobCard'
import axios from 'axios'
import {BASE_URL, headers} from '../../constants/urls'
import styled from 'styled-components'

const ContainerDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    margin-top: 20px;
    
`
const ContainerInputs = styled.div`
    display: flex;
    column-gap: 5%;
    width: 200px;
    margin-left: 5px;
    margin-top: 5px;
`

export default class JobsListPage extends React.Component{
    state = {
        jobsList: [],
        filteredJobsList: [],
        minValue: '',
        maxValue: '',
        search: '',
        order: 'titulo'
    }

    componentDidMount() {
        this.getJobs()
    }
    componentDidUpdate(prevProps, prevState){
        if(
            this.state.minValue !== prevState.minValue ||
            this.state.maxValue !== prevState.maxValue ||
            this.state.search !== prevState.search ||
            this.state.order !== prevState.order
        ){
            this.filterJobs()
        }
    }
    handleMinValue = (event) => {
        this.setState({minValue: event.target.value})
    }
    handleMaxValue = (event) => {
        this.setState({maxValue: event.target.value})
    }
    handleSearch = (event) => {
        this.setState({search: event.target.value})
    }
    handleOrder = (event) => {
        this.setState({order: event.target.value})
    }

    getJobs = () => {
        axios.get (`${BASE_URL}/jobs`, headers)
        .then((res) => {
            this.setState({jobsList: res.data.jobs, filteredJobsList: res.data.jobs})
        })
        .catch((err)=> {
            console.log(err.response.data.message)
        }) 
    }

    filterJobs = () => {
        const maximum = this.state.maxValue ? this.state.maxValue: Infinity
        const minimum = this.state.minValue ? this.state.minValue: -Infinity
        const newJobsList = this.state.jobsList
            .filter((x) => x.price >= minimum)
            .filter((x) => x.price <= maximum)
            .filter((x)=> {
                const jobTitle = x.title.toLowerCase()
                const jobDescription = x.description.toLowerCase()
                const searchText = this.state.search.toLocaleLowerCase()
                return jobTitle.includes(searchText) || jobDescription.includes(searchText) 
            }).sort((a, b) => {
                switch (this.state.order) {
                    case 'Menor Valor':
                        return a.price - b.price
                    case 'Maior Valor':
                        return b.price - a.price
                    case 'Titulo':
                        return a.title.localeCompare(b.title)
                    case 'Prazo':
                        return a.dueDate.localeCompare(b.dueDate)
                }
            })

        this.setState({filteredJobsList: newJobsList})
    }
    render(){
        const allJobs = this.state.filteredJobsList.map((x)=>{
            return <JobCard key = {x.id} job = {x} goToDetailPage = {this.props.goToDetailPage} addToCart={this.props.addToCart}/>
        })

        return (
            <div>
                <h2>Filtros de Busca</h2>
                <ContainerInputs>
                    <input placeholder = 'Valor minimo' onChange = {this.handleMinValue} value = {this.state.minValue}/>
                    <input placeholder = 'Valor máximo' onChange = {this.handleMaxValue} value = {this.state.maxValue}/>
                    <input placeholder = 'Título ou descrição' onChange = {this.handleSearch} value = {this.state.search}/>
                    <select onChange = {this.handleOrder} value = {this.state.order}>
                        <option>Menor Valor</option>
                        <option>Maior Valor</option>
                        <option>Titulo</option>
                        <option>Prazo</option>
                    </select>
                </ContainerInputs>
                <h1>Serviços disponíveis</h1>
                <ContainerDiv>
                   {allJobs}
                 </ContainerDiv>
            </div>
            
        )
    }
}
