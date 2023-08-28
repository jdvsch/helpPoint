import styled from 'styled-components'

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
height: 60px;
width: 100%;
margin: 0 15px;
`

export const InputLabel = styled.label`
height: 25%;
font-size: 12px;
`

export const Input = styled.input`
height: 50%;
font-size: 20px;
border: none;
outline: none;
border-bottom: solid 2px black;
background-color: ${({ theme }) => theme.bg2};
`

export const ErrorMessage = styled.span`
height: 25%;
font-size: 12px;
font-weight: bold;
color: red;
`
