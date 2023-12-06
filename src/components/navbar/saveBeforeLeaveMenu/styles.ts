import styled, { keyframes } from 'styled-components'

interface Props1 {
  isDirty: boolean
}

interface Props2 {
  windowWidth: number
}

const animation1 = keyframes`
0% {
left: -100%;
}
100% {
left: 100%;
}
`

const animation2 = keyframes`
0% {
top: -100%;
}
100% {
top: 100%;
}
`

const animation3 = keyframes`
0% {
right: -100%;
}
100% {
right: 100%;
}
`

const animation4 = keyframes`
0% {
bottom: -100%;
}
100% {
bottom: 100%;
}
`

export const MainDiv = styled.div<Props2>`
height: 100%;
display: flex;
justify-content:  ${props => (props.windowWidth <= 900) ? 'space-between' : 'end'};
padding-top: 2px;
`

export const GoBackButton = styled.button`
margin-left: 10px;
border: none;
border-radius: 5px;
background-color: ${({ theme }) => theme.bg5};
cursor: pointer;

svg{
    font-size: 30px;
    color: ${({ theme }) => theme.bg1};
}
`

export const SaveButton = styled.button<Props1>`
position: relative;
height: auto;
width: auto;
padding: 5px 10px;

font-weight: bold;
font-size: 20px;
margin-right: 10px;
border-radius: 5px;
border: none;
cursor: ${props => props.isDirty ? 'pointer' : 'not-allowed'};
background-color: ${({ theme }) => theme.bg1};
opacity: ${props => props.isDirty ? 1 : 0.5};
overflow: hidden;

span{
    position:absolute;
    display: block;
}

span:nth-child(1){
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, green);
    animation: ${animation1} 1s infinite;
    visibility: ${props => props.isDirty ? '' : 'hidden'};
}

span:nth-child(2){
    top: -100%;
    right: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, transparent, green);
    animation: ${animation2} 1s infinite;
    animation-delay: .25s;
    visibility: ${props => props.isDirty ? '' : 'hidden'};
}

span:nth-child(3){
    bottom: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(270deg, transparent, green);
    animation: ${animation3} 1s infinite;
    animation-delay: .5s;
    visibility: ${props => props.isDirty ? '' : 'hidden'};
}

span:nth-child(4){
    bottom: -100%;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(360deg, transparent, green);
    animation: ${animation4} 1s infinite;
    animation-delay: .75s;
    visibility: ${props => props.isDirty ? '' : 'hidden'};
}
`
