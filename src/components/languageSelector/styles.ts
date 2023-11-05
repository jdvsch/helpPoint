import styled from 'styled-components'

export const MainDiv = styled.div`
width: 100px;

display: flex;
flex-direction: column;
align-items: center;
position: absolute;
right: 0;
top: 90%;
background-color: ${({ theme }) => theme.bg1};
border-radius: 5px;
`
export const Simg = styled.img`
height: auto;
width: auto;
max-width: 20px;
max-height: 20px;
border-radius: 3px;
margin-right: 8px;
`
export const Sbutton = styled.button`
display: flex;
width: fit-content;

margin: 5px 0;
padding: 5px;
border: none;
background-color: transparent;
border-radius: 5px;

&:hover{
    background-color: ${({ theme }) => theme.bg2};
    cursor: pointer;
}
`
