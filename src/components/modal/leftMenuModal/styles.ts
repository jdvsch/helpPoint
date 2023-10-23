import styled, { keyframes } from 'styled-components'

export interface Props {
  Width?: string
}

const animation1 = keyframes`
  0% {
  transform: scaleX(0.2);transform-origin: 0% 0%;
  }
  100% {
  transform: scaleX(1);transform-origin: 0% 0%;
  }
`

export const MainDiv = styled.div<Props>`
  z-index: 2;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: fit-content;
  background-color: ${({ theme }) => theme.bg3};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${animation1} 300ms ease 0s normal none;
  padding: 0  5px;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  height: 3rem;
  border: none;
  cursor: pointer;
  margin: 5px 0;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text};
      
  &:hover {
    background-color: ${({ theme }) => theme.bgAlpha};
  }

  &.active{
    color: ${({ theme }) => theme.primary};
  }
`

export const Logo = styled.img`
  height: auto;
  width: auto;
  max-width: 150px;
  max-height: 150px;
  border-radius: 5px;
  cursor: pointer;
`
