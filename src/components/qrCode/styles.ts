import styled from 'styled-components'

export const MainDiv = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`

export const QR = styled.div`
height: 20px;
width: 20px;
`

export const Button = styled.button`
font-size: 35px;
color: ${({ theme }) => theme.text};
border: none;
background-color: transparent;
cursor: pointer;
`
