import styled from 'styled-components'

export const Th = styled.th`
position: relative;
text-align: start;
`

export const ColumnName = styled.div`
&:hover {
    color: gray;
    background-color: blanchedalmond;
}
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

export const Record = styled.tr`
&:hover {
    color: gray;
    background-color: blanchedalmond;
}
`
