import styled from 'styled-components'

interface Props {
  bgColor?: string
  Color?: string
  Left?: string
  Right?: string
}

export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 5px;
  background-color: ${({ theme }) => theme.bg5};
`

export const LeftMenu = styled.div`
display: flex;
`

export const Sselect = styled.select`
  padding: 0 10px;
  font-weight: bold;
  margin: 0 10px;
`

export const RightMenu = styled.div`

`
export const Sbutton = styled.button<Props>`
  position: relative;
  margin: 0 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
  color: ${({ theme }) => theme.text5};

  &:hover{
    color: ${props => props.bgColor};
  }

  &:hover span{
    visibility: visible;
    opacity: 1;
    z-index: 1;
  }
`

export const Sspan = styled.span<Props>`
  position: absolute;
  font-size: 12px;
  top: 120%;
  left: ${props => props.Left};
  right: ${props => props.Right};
  background-color: ${({ theme }) => theme.text5};
  color: ${({ theme }) => theme.bg1};
  white-space: nowrap;
  padding: 5px;
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s ease;
`
