import styled from 'styled-components'

export const MainDiv = styled.div`
height: 100%;
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
`

export const Button = styled.button`
height: 30px;
width: 90%;
margin-top: 8px;

font-size: 18px;
background-color: ${({ theme }) => theme.bg3};
border-radius: 5px;
border: none;
cursor: pointer;

&:first-of-type {
  margin-top: 28px;
}

&:hover{
    background-color: ${({ theme }) => theme.bg1};
  }
`
