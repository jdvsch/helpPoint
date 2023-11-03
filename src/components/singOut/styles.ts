import styled from 'styled-components'

export const Button = styled.button`
    width: 100%;

    font-size: 2rem;
    margin-bottom: 5px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background-color:transparent;

    &:hover{
        background-color: ${({ theme }) => theme.bg1};
        width: 100%;
        color: ${({ theme }) => theme.bg};
    }

    svg{
        color: ${({ theme }) => theme.text1};
    }
`
