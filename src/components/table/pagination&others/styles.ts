import styled from 'styled-components'

export const Main = styled.div`
display: flex;
padding: 8px;
background-color: ${({ theme }) => theme.bg2};
border-radius: 5px;
`

export const Sbutton = styled.button`
margin: 0 5px;
border: none;
background-color: transparent;
`

export const Sspan = styled.span`
margin: 0 5px;
`

export const Sinput = styled.input`
border-radius: 5px;
padding-left: 5px;
margin-left: 5px;
width: 100px;
`

export const Sselect = styled.select`
width: 100px;
padding-left: 5px;
`
