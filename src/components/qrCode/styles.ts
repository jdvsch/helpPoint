import styled from 'styled-components'

export const Button = styled.button`
height: auto;
width: auto;

position: relative;
cursor: pointer;
border: none;
background-color: ${({ theme }) => theme.bg5};

&:hover span{
    visibility: visible;
    opacity: 1;
    z-index: 1;
  }
`

export const Span = styled.span`
position: absolute;
top: 100%;
right: 0;
font-size: 12px;
background-color: ${({ theme }) => theme.text5};
color: ${({ theme }) => theme.bg1};
white-space: nowrap;
padding: 5px;
border-radius: 5px;
visibility: hidden;
opacity: 0;
transition: opacity 0.5s ease;
`
