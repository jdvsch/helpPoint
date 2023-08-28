import styled from 'styled-components'
import cmms from '../../assets/cmms.png'

export const MainDiv = styled.div`
display:flex;
padding: 10px;
border-radius: 5px;
/* background-image: url(${cmms});
background-size: cover;
background-repeat: no-repeat; */
`

export const Form = styled.form`
width: 300px;
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 50%;
background-color: #457b9d;
`

export const Img = styled.img`
height: auto;
width: auto;
max-width: 170px;
max-height: 170px;
border-radius: 3px;
`

export const Input = styled.input`
margin: 10px 0;
width: 240px;
height: 30px;
border-radius: 5px;
border: gray solid 1px;
text-align: center;
font-weight: 700;
`
export const Span = styled.span`
color: white;
`

export const Button = styled.button`
margin-top: 5px;
width: 100px;
height: 40px;
background-color: #52b69a;
border-radius: 20px;
border: none;
color: #495057;
font-weight: 700;
cursor: pointer;
    &:hover{
        background-color: #343a40;
        color: white;
    }
`

export const Div = styled.div`
position: relative;
`

export const Icon = styled.span`
position: absolute;
top: 25%;
bottom: 25%;
right: 2%;
`
