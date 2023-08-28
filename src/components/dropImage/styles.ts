import styled from 'styled-components'

export const DragDrop = styled.div`
height: 200px;
width: 200px;
border-radius: 50px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background-color: white;
`

export const Paragraph = styled.p`
text-align: center;
`

export const Image = styled.img`
height: 200px;
width: 200px;
border-radius: 50px;
`
export const Button = styled.button`
font-size: 35px;
color: ${({ theme }) => theme.text};
border: none;
background-color: transparent;
cursor: pointer;
`
