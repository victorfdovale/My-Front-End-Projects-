import axios from 'axios'
import {useState, useEffect} from 'react'
import styled from 'styled-components'

const ContainerImagem = styled.img`
    margin-left: 2.5%;
    margin-top: 1%;
    width: 95%;
    height: 170px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 2px 8px 3px #1C1E1F; 
    box-shadow: 0px 2px 8px 3px #1C1E1F;
`
const Like = styled.img`
    width: 50px;
    height: 40px;
    cursor: pointer;

`
const Dislike = styled.img`
    width: 50px;
    height: 40px;
    cursor: pointer;
    margin-left: 25%;

`
const ContainerBotao = styled.div`
    display: flex;
    margin-top: 50px;
`
const Limpar = styled.button`
    margin-left: 25%;
    width: 50px;
    height:40px;
    padding: 3px;
    background-color: white;
    border: white;
    border-radius: 10px;
    &:hover {
    background-color: palevioletred;
    color: white;
    cursor: pointer;
  }
`
const Description = styled.div`
    margin-top: 30px;
    font-family: 'Courier New', Courier, monospace;
    
`

export default function HomePage() {
    const [id, setId] = useState('')
    const [idade, setIdade] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')
    const [bio, setBio] = useState('')
    
    useEffect(() => {
        getProfiles();
      }, []);

    const getProfiles = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor/person'
        axios.get (url)
        .then((res) => {

            setId(res.data.profile.id)
            setIdade(res.data.profile.age)
            setNome(res.data.profile.name)
            setFoto(res.data.profile.photo)
            setBio(res.data.profile.bio)
            
        })
        .catch((err)=> {
            console.log(err)
        })
        
        
    }
    const choosePerson = (condition) => {
        
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:victor/choose-person'
        const headers = {
            headers: {
                Authorization: "victor"
            }
        }
        const body = {
            id:id,
            choice:condition
        }
        console.log('body',body)
        axios.post(url,body,headers)
            .then((res)=>{
                console.log('deu bom')
                getProfiles()

            }).catch((err) => {
                console.log(err.data)
            })
    }
    const clear = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:victor/clear'
        const headers ={
            headers:{
                Authorization: 'victor'
            }
        }
        axios.put(url, headers)
        .then((res) => {
            getProfiles()
        })
        .catch((err) => {
            console.log(err.response.data)
        })

    }


    return (
      <div>
        <div>
            <ContainerImagem src={foto}/>
            <Description>
                <h2>{nome}</h2>
                <h3>{idade}</h3>
                <h4>{bio}</h4>
            </Description>
            <ContainerBotao>
                <Like onClick={()=>choosePerson(true)} src='https://www.kindpng.com/picc/m/132-1323936_tinder-heart-and-x-hd-png-download.png'/>
                <Dislike onClick={()=>choosePerson(false)} src='https://pbs.twimg.com/profile_images/534074996562227200/OR7cp94I.png'/>
                <Limpar onClick = {clear}>Limpar</Limpar>
            </ContainerBotao>
        </div>
       
      </div>
    )
  

}
    