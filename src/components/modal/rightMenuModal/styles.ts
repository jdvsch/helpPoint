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
  height: 100%;
  width: ${({ theme }) => theme.width};

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;

  background-color: ${({ theme }) => theme.bg3};
  animation: ${animation1} 300ms ease 0s normal none;
  padding: ${props => ((props.Padding ?? '').length > 0) ? props.Padding : '25px'};
  z-index: 2;
`

export const Sbutton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 30px;
  cursor: pointer;
  padding: 5px;

  &:hover{
    background-color: black;
    color: white;
    border-radius: 5px;
  }
`

export const List = styled.div`

  overflow:auto;
`
