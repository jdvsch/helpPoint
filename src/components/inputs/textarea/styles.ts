import styled from 'styled-components'

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: 100%;
margin: 0 15px;
`

export const InputLabel = styled.label`
height: 25%;
font-size: 12px;
`

export const Textarea = styled.textarea`
font-size: 20px;
border: none;
outline: none;
border-bottom: solid 2px black;
background-color: ${({ theme }) => theme.bg2};
resize:vertical;
min-height: 50px;
`

export const ErrorMessage = styled.span`
height: 25%;
font-size: 12px;
font-weight: bold;
color: red;
`
