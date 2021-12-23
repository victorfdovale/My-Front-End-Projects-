import React from 'react'
import { Card } from './StyledCard'



const JobCard = (props) => {
    const convertDate = (date) =>{
        const day = date.substring(8,10)
        const month = date.substring(5,7)
        const year = date.substring(0,4)
        return `${day}/${month}/${year} `
    }
    return (
    <Card>
        <h3>{props.job.title}</h3>
        <p><strong>Preço:</strong>R${props.job.price.toFixed(2)}</p>
        <p><strong>Prazo:</strong>{convertDate(props.job.dueDate)} </p>
        <button onClick={()=> props.goToDetailPage(props.job.id)}>Ver Detalhes</button>
        <button onClick={()=> props.addToCart(props.job)}>Adicionar ao carrinho</button>
    </Card>
    )
}

export default JobCard