import styled from 'styled-components'

interface Props {
  bgColor?: string
  Color?: string
  Left?: string
  Right?: string
}

export const MainDiv = styled.div`
display: flex;
justify-content: space-between;
margin-top: 5px;
margin-bottom: 10px;
`

export const LeftMenu = styled.div`
display: flex;
`

export const Sselect = styled.select`
margin: 0 10px;
`

export const CenterMenu = styled.div`

`

export const RightMenu = styled.div`

`
export const Sbutton = styled.button<Props>`
position: relative;
margin: 0 10px;
border: none;
background-color: transparent;
cursor: pointer;
font-size: 25px;
color: ${props => ((props.Color ?? '').length > 0) ? props.Color : 'black'};

&:hover{
  color: ${props => ((props.bgColor ?? '').length > 0) ? props.bgColor : ''};
}

&:hover span{
  top: 120%;
  visibility: visible;
  opacity: 1;
  z-index: 1;
}
`

export const Sspan = styled.span<Props>`
position: absolute;
font-size: 12px;
left: ${props => ((props.Left ?? '').length > 0) ? props.Left : ''};
right: ${props => ((props.Right ?? '').length > 0) ? props.Right : ''};
background-color: black;
color: white;
white-space: nowrap;
padding: 5px;
border-radius: 5px;
visibility: hidden;
opacity: 0;
transition: opacity 0.5s ease;
`
