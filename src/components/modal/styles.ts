import styled, { keyframes } from 'styled-components'

const MotionModal = keyframes`
0% {
  transform: translateX(-50vw);
}

100% {
  transform: translateX(0px);
}`

export const OuterDiv = styled.div`
  z-index: 2;
  width: fit-content;
  height: fit-content;
  position: absolute;
  bottom: 10px;
  left: 0;
  background: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InnerDiv = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.text};
  width: auto;
  height: auto;
  padding: 1rem;
  border-radius: 1rem;
  animation: ${MotionModal} 400ms ease 0s normal none;
`

export const AlertMessage = styled.div`
display: flex;
align-items: center;
color: ${({ theme }) => theme.bg};
font-weight: bold;
`

export const AlertDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const AlertImg = styled.img`
height: auto;
width: auto;
max-height: 50px;
max-width: 50px;
`

export const ButtonAlert = styled.button`
height: 25px;
width: 90px;
background-color: ${({ theme }) => theme.primary};
border: none;
border-radius: 5px;
color: ${({ theme }) => theme.bg};
font-weight: bold;
`
