import React from "react"
import HomePage from './Pages/HomePage/HomePage'
import CreateJob from './Pages/CreateJobPage/CreateJob'
import CartPage from './Pages/CartPage/CartPage'
import JobsListPage from './Pages/JobsListPage/JobsListPage'
import JobDetailPage from './Pages/JobDetailPage/JobDetailPage'
import Header from "./components/Header"
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding: 0;
    width: 100 vw;
    min-height: 100vh;
  }

  input{
    margin-bottom: 20px;
    height: 25px;
  }

  select{
    margin-bottom: 20px;
  }
`

export default class App extends React.Component{
  state = {
    currentPage: '',
    jobDetailId: '',
    cart: []
  }

  changePage = (pageName) => {
    this.setState({currentPage: pageName})
  }

  goToDetailPage = (jobId) => {
    this.setState({currentPage: 'Detail', jobDetailId: jobId})
  }

  addToCart = (job) => {
    const newCart = [...this.state.cart, job]
    this.setState({cart: newCart})
    alert(`o serviço ${job.title} foi adicionado ao carrinho`)
  }

  removeFromCart = (id) =>{
    const canDelete = window.confirm(`Gostaria de remover este serviço?`)
    if (canDelete){
      const newCart = this.state.cart.filter((cartItem) => {
        return cartItem.id !== id
      })
      this.setState({cart: newCart})
    }
  }

  clearCart = () => {
    this.setState ({cart:[]})
    alert('Compra realizada com sucesso!')
  }

  choosePage = () => {
    switch (this.state.currentPage) {
      case 'Home':
        return <HomePage changePage = {this.changePage}/>
      case 'List':
        return <JobsListPage addToCart={this.addToCart} goToDetailPage={this.goToDetailPage}/>
      case 'Form':
        return <CreateJob/>
      case 'Cart':
        return <CartPage changePage={this.changePage} cart = {this.state.cart} removeFromCart={this.removeFromCart} clearCart={this.clearCart}/>
      case 'Detail':
        return <JobDetailPage jobId = {this.state.jobDetailId} changePage = {this.changePage}/>
      default:
        return <HomePage changePage = {this.changePage}/>
    }
  }


  render(){
    return (
      <div>

        <GlobalStyle/>
        <Header changePage = {this.changePage}/>
        {this.choosePage()}
      </div>
    );
  }
    
}


