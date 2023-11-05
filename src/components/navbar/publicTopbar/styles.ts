import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export interface Props {
  Height?: string
  Color?: string
}

export const MainDiv = styled.div<Props>`
height: ${props => props.Height};
width: 98%;
display: flex;
`

export const LeftSide = styled.div`
width: 50%;
display: flex;
align-items: center;
`

export const Logo = styled.img`
min-height: auto;
min-width: auto;
height: 3.2rem;
border-radius: 5px;
`

export const RightSide = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: end;

svg {
  color: ${({ theme }) => theme.text4};

  &:hover{
    color: ${({ theme }) => theme.bg2};
    cursor: pointer;
  }
}
`

export const Link = styled(NavLink)`
text-decoration: none;
margin: 0 10px;
font-size: 1.25rem;
color: ${({ theme }) => theme.text5};

&.active{
  color: ${({ theme }) => theme.bg2};
}
`

export const Button = styled.button<Props>`
color: ${({ theme }) => theme.text4};
background-color: transparent;
border: none;
font-size: 30px;
`

export const Language = styled.div`
position: relative;
`
