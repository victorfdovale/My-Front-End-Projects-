import React from 'react'
import styled from 'styled-components'

const ContainerHeader = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: whitesmoke;
    margin-bottom: 10px;
 
`
const CardButton = styled.button`
    border: white;
    background-color: white;
    margin-right: 10px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
    background-color: palevioletred;
    color: white;
    
  }
`


const Header = (props) => {
    return (
        <ContainerHeader>
             <h3>ValleyMatch &#10084;</h3>
             <div>
                <CardButton onClick = {() => props.changePage('Home')}>Home</CardButton>
                <CardButton onClick ={() => props.changePage('MatchesPage')}>Seus Matches</CardButton>
             </div>
            
        </ContainerHeader>
           
    )
}

export default Header