import styled from 'styled-components'

export const MainDiv = styled.div`
display: flex;
justify-content: space-between;
`

export const LeftMenu = styled.div`
display: flex;
`

export const Sselect = styled.select`

`

export const CenterMenu = styled.div`

`

export const RightMenu = styled.div`

`
export const Button = styled.button`
margin: 0 10px;
border: none;
background-color: transparent;
cursor: pointer;
font-weight: bold;
font-size: 25px;
&:hover::before{
    content: 'text'
}
`
