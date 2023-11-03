import styled from 'styled-components'

export interface Props {
  Height?: string
}

export const MainDiv = styled.div<Props>`
  height: ${props => props.Height};
  width: 100%;
  background-color: ${({ theme }) => theme.bg3};
  display: flex;
`

export const Button = styled.button`
  background-color: transparent;
  font-size: 1.8rem;
  margin: 0 20px;
  border: 0px;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.text1};
    margin-right: 0.5rem;
  }
`

export const Location = styled.div`
font-weight: 700;
font-size: 1rem;
display: flex;
align-items: center;

`

export const Span = styled.span`
color: ${({ theme }) => theme.primary};
`
