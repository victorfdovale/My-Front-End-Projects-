import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: lightslategray;
    padding: 0 12px;
    display:flex;
    justify-content: space-between;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: white;
    -webkit-box-shadow: 0px 0px 23px -5px rgba(0,0,0,0.53); 
    box-shadow: 0px 0px 23px -5px rgba(0,0,0,0.53);

`
export const ButtonContainer = styled.button`
    margin-top: 15px;
    margin-left: 40px;
    background-color: transparent;
    padding: 7px;
    border: transparent;
    cursor: pointer;
    &:hover {
    background-color: gray;
    color: white
    
  }
`



