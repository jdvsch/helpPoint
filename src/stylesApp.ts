import styled from 'styled-components'

export const MainDiv = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${({ theme }) => theme.bg1};
color: ${({ theme }) => theme.text5};
`
