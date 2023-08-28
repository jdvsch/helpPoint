import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const SidebarLink = styled(NavLink)`
display: flex;
justify-content: space-between;
align-items: center;
height: 3rem;
font-size: 1.125rem;
text-decoration: none;
color: ${({ theme }) => theme.text};
    &:hover {
    background-color: ${({ theme }) => theme.bgAlpha};
    }
    &.active{
    color: ${({ theme }) => theme.primary};;
    }
`

export const SidebarLabel = styled.span`
padding-left: 1rem;
`

export const DropdownLink = styled(NavLink)`
display: flex;
justify-content: flex-start;
align-items: center;
height: 2.75rem;
font-size: 1.125rem;
padding-left: 40px;
text-decoration: none;
color: ${({ theme }) => theme.text};
background-color: blue  ;
    &:hover {
    background-color: ${({ theme }) => theme.bgAlpha};
    }
`
