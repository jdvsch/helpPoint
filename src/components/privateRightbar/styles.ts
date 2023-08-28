import styled, { keyframes } from 'styled-components'

const animation1 = keyframes`
0% {
transform: scaleX(0.4);transform-origin: 100% 100%;
}
100% {
transform: scaleX(1);transform-origin: 100% 100%;
}
`

export const MainDiv = styled.div`
height: 100%;
width: 280px;
margin: 5px;
background-color: ${({ theme }) => theme.bg3};
display: flex;
flex-direction: column;
justify-content: start;
animation: ${animation1} 300ms ease 0s normal none;
`
