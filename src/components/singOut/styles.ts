import styled from 'styled-components'

export const Button = styled.button`
font-size: 2rem;
margin-bottom: 5px;
border: none;
cursor: pointer;
border-radius: 5px;
&:hover{
    background-color: ${({ theme }) => theme.text};
    width: 100%;
    color: ${({ theme }) => theme.bg};
}
`
