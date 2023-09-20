import styled from 'styled-components'

export const Stable = styled.table`
border: 1px solid lightgray;
`

export const StrHead = styled.tr`
background-color: whitesmoke;
`

export const Sth = styled.th`
padding: 2px 10px;
text-align: center;
:hover{
    color: gray;
    background-color: white;
}
`

export const StrBody = styled.tr`
width: fit-content;
:hover{
    background-color: ${({ theme }) => theme.bg};
}
`

export const Std = styled.td`
padding: 2px 10px;
height: 27px;
text-align: start;
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
