import styled from 'styled-components'

interface Props {
  Left?: string
  Right?: string
}

export const TopMenu = styled.div`
width: 100%;
padding-top: 5px;
display: flex;
gap: 2rem;
`

export const Button = styled.button`
position: relative;
border: none;
background-color: ${({ theme }) => theme.bg5};
cursor: pointer;

&:hover span{
    visibility: visible;
    opacity: 1;
    z-index: 1;
}

svg{
    font-size: 25px;
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
