import styled from 'styled-components'

interface Props {
  cursorType: boolean
}

export const Main = styled.div`
margin: 0 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`

export const Span = styled.span`
color: ${({ theme }) => theme.primary};
font-weight: bold;
margin-bottom: 7px;
width: fit-content;
`

export const Clock = styled.div<Props>`
height: 120px;
width: 120px;
border-radius: 50%;
background-color: ${({ theme }) => theme.bg};
display: flex;
justify-content: center;
align-items: center;
color: ${({ theme }) => theme.text};
font-size: 40px;
font-weight: bold;
cursor: ${(props) => (props.cursorType ? 'pointer' : 'default')};
`
