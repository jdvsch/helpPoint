import styled, { keyframes } from 'styled-components'

interface Props {
  bgColor?: string
  Color?: string
}

const MotionModal = keyframes`
0% {
  transform: translateX(-50vw);
}

100% {
  transform: translateX(0);
}`

export const MainDiv = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  position: absolute;
  bottom: 50px;
  left: 20px;
  z-index: 1;
  background: ${props => props.bgColor !== null ? props.bgColor : ''};
  animation: ${MotionModal} 400ms ease 0s normal none;
  border-radius: 1rem;
`

export const Sp = styled.p`
  font-weight: bold;
  user-select: none;
  color: black;
`

export const ButtonAlert = styled.button<Props>`
border: none;
font-size: 30px;
background-color: transparent;
margin-left: 15px;
cursor: pointer;
color: ${props => props.Color !== null ? props.Color : 'black'};
`
