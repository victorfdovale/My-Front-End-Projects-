
import {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'


const ContainerMatches = styled.div`
    display: flex;
    margin-bottom: 20px;
    background-color: whitesmoke;
    -webkit-box-shadow: 0px 3px 20px -7px rgba(28,30,31,0.81); 
    box-shadow: 0px 3px 20px -7px rgba(28,30,31,0.81);
    cursor: pointer;
   
`
const ImgProfile = styled.img`
    height: 60px;
    width: 60px;
    margin-right: 20px;
`


export default function MatchesPage() {
 
    const [combinacao, setCombinacao] = useState([])
    const [id, setId] = useState('')

    useEffect(() =>{
        getMatches()
    },[])

    const getMatches = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:victor/matches'
        const headers = {
            headers:{
                Authorization: 'victor'
            }
        }
        axios.get(url, headers)
        .then((res) => {
            setCombinacao(res.data.matches)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
        console.log('esse é o array de combinação', combinacao)
    }


    const matchesList  = combinacao.map((x) => {
        return (
            <ContainerMatches key={x.id}>
                <ImgProfile src = {x.photo}/>
                <h4>{x.name}</h4>
                
                
            </ContainerMatches>
        )
    })

    return (
      <div>
        <h2>Seus Matches</h2>
        {matchesList}
      </div>
    )
  

}
    