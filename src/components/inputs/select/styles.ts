import styled from 'styled-components'

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
height: auto;
`

export const InputLabel = styled.label`
height: 25%;
font-size: 12px;
user-select: none;
`

export const SelectOptions = styled.select`
font-size: 20px;
border: none;
outline: none;
border-bottom: solid 2px black;
background-color: ${({ theme }) => theme.bg2};
resize:vertical;
min-height: 30px;
border-radius: 5px;
padding: 0 4px;
text-overflow: ellipsis;
`

export const ErrorMessage = styled.span`
height: 25%;
font-size: 12px;
font-weight: bold;
color: red;
`
