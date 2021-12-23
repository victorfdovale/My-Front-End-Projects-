import React from 'react'
import {HeaderContainer} from './StyledHeader'
import { ButtonContainer } from './StyledHeader'

const Header = (props) => {
    return (
        <HeaderContainer>
             <h3>Labeninjas</h3>
             <div>
                <ButtonContainer onClick = {() => props.changePage('Home')}>Home</ButtonContainer>
                <ButtonContainer onClick ={() => props.changePage('Cart')}>Carrinho</ButtonContainer>
             </div>
            
        </HeaderContainer>
           
    )
}

export default Header