import styled from 'styled-components'

interface Props {
  Color?: string
  bgColor?: string
  fSize?: string
}

export const Main = styled.div`
font-size: 12px;
`

export const Tables = styled.table`
min-height:50px;
`

export const Tr = styled.tr`
width: fit-content;
`

export const TrTd = styled.tr`
width: fit-content;
:hover{
    background-color: ${({ theme }) => theme.bg};
}
`

export const Th = styled.th`
min-width: 130px;
box-shadow: inset 0 0 0 1px lightgray;
padding: 0.25rem;
padding: 2px 4px;
position: relative;
font-weight: bold;
text-align: center;
`

export const Td = styled.td`
box-shadow: inset 0 0 0 1px lightgray;
padding: 0.25rem;
height: 27px;
text-align: center;
`

export const TableHeader = styled.div`
height: 20px;
margin: 5px 0;
cursor: pointer;
font-size: 15px;
`

export const Resizer = styled.div`
position: absolute;
right: 0;
top: 0;
height: 100%;
width: 5px;
background: rgba(0, 0, 0, 0.5);
cursor: col-resize;
user-select: none;
touch-action: none;

@media (hover: hover) {
    opacity: 0;
}

&.isResizing{
    background: blue;
    opacity: 1;
    }
`

export const Topmenu = styled.div`
display: flex;
justify-content: space-between;
margin: 0px 10px;
min-height: 50px;
`

export const MenuOptions = styled.div`
display: flex;
align-items: center;
position: relative;
width: 50%;
`

export const Submenu = styled.div`
display: flex;
position: absolute;
top: 35px;
z-index: 1;
background-color: ${({ theme }) => theme.bg3};
border-radius: 20px;
padding: 10px;
margin-top: 5px;
margin-bottom: 20px;
`

export const Button = styled.button<Props>`
margin: 0 10px;
font-size: ${props => props.fSize !== null ? props.fSize : '18px'};
color: ${props => props.Color !== null ? props.Color : ''};
border: none;
background-color: transparent;
cursor: pointer;
font-weight: bold;
`

export const Label = styled.label<Props>`
color: ${props => props.Color !== null ? props.Color : ''};
background-color: ${props => props.bgColor !== null ? props.bgColor : ''};
margin: 10px;
padding: 5px 7px;
border-radius: 10px;
font-weight: bold;
cursor: pointer;
`

export const Pagination = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
align-items: center;
`

export const Arrows = styled.div`
display: flex;
`

export const Goto = styled.div`
display: flex;
`

export const Span = styled.span`
display: flex;
margin: 0 7px;
font-size: 16px;
`

export const Input = styled.input`
height: 16px;
width: 50px;
margin: 0 7px 0 7px;
`

export const Select = styled.select`
height: 18px;
`
