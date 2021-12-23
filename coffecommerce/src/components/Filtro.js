import React from 'react'
import styled from 'styled-components'
import App from '../App'

const DivFiltro = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 90vh;
    padding: 10px;
`
const Input = styled.input`
    width: 100%;
    max-width: 300px;
`


export default function Filtro(props) {
    return (
        <DivFiltro>
            <h2>Filtros</h2>
            <label>Valor mínimo:</label>
            <Input
                onChange={props.filtrarMinimo}
                type="number"
            />
            <label>Valor máximo:</label>
            <Input
                onChange={props.filtrarMaximo}
                type="number"
            />
            <label>Busca por nome:</label>
            <Input
                onChange={props.buscar}
                placeholder={"produto"}
                type="text"
                value={props.valueBusca}
            />
        </DivFiltro>
    )
}