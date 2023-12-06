import styled from 'styled-components'

const HEIGHT = '180px'
const WIDTH = '180px'

export const DragDrop = styled.div`
height: ${HEIGHT};
width: ${WIDTH};
border-radius: 50px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background-color: white;
cursor: pointer;

svg{
    font-size: 55px;
    color: ${({ theme }) => theme.bg2};
}
`

export const Paragraph = styled.p`
text-align: center;
font-weight: bold;
`

export const ImageDiv = styled.div`
position: relative;
height: ${HEIGHT};
width: ${WIDTH};
`

export const Image = styled.img`
height: ${HEIGHT};
width: ${WIDTH};
border-radius: 50px;
`

export const Button = styled.button`
position: absolute;
top: 0;
right: 0;
border-radius: 5px;
border: none;
background-color: ${({ theme }) => theme.text};
cursor: pointer;

svg {
    color: ${({ theme }) => theme.text};
    font-size: 35px;
}
`
