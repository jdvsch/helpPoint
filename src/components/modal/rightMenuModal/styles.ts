import styled, { keyframes } from 'styled-components'

export interface Props {
  Width?: string
  Padding?: string
}

const animation1 = keyframes`
  0% {
  transform: scaleX(0.2);transform-origin: 100% 100%;
  }
  100% {
  transform: scaleX(1);transform-origin: 100% 100%;
  }
`

export const MainDiv = styled.div<Props>`
  z-index: 2;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
  background-color: ${({ theme }) => theme.bg3};
  display: flex;
  flex-direction: column;
  animation: ${animation1} 300ms ease 0s normal none;
  padding: ${props => ((props.Padding ?? '').length > 0) ? props.Padding : '25px'};
  width: ${props => ((props.Width ?? '').length > 0) ? props.Width : '230px'};
  overflow: auto;
`

export const Sbutton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 30px;
  color: orange;
  cursor: pointer;
  padding: 5px;

  &:hover{
    background-color: black;
    color: white;
  }
`
