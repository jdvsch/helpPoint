import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export interface Props {
  Height?: string
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
`

export const Link = styled(NavLink)`
text-decoration: none;
margin: 0 10px;
font-size: 1.25rem;
    &.active{
        color: orange;
    }
`
