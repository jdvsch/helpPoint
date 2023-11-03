import styled, { keyframes } from 'styled-components'

const animation1 = keyframes`
  0% {
  transform: scaleX(0.2);transform-origin: 0% 0%;
  }
  100% {
  transform: scaleX(1);transform-origin: 0% 0%;
  }
`

export const MainDiv = styled.div`
  height: 100%;
  width: fit-content;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  padding: 0 5px;
  background-color: ${({ theme }) => theme.bg2};
  animation: ${animation1} 300ms ease 0s normal none;
  z-index: 2;
  overflow: auto;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  height: 3rem;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 0;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg1};
      
  &:hover {
    background-color: ${({ theme }) => theme.bg1};
  }
`

export const Logo = styled.img`
  height: auto;
  width: auto;
  max-width: 150px;
  max-height: 150px;

  margin-bottom: 5px;
  border-radius: 5px;
  cursor: pointer;
`
