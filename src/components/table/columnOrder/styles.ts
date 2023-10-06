import styled from 'styled-components'

export const Sth = styled.th`
position: relative;
text-align: start;
padding: 5px;
border-bottom: 2px solid rgba(0, 0, 0, 0.3);
user-select: none;
`

export const ColumnName = styled.div`
display: flex;
&:hover {
    color: gray;
}
`

export const Resizer = styled.div`
position: absolute;
right: 0;
top: 0;
height: 100%;
width: 7px;
background: rgba(0, 0, 0, 0.5);
cursor: col-resize;
user-select: none;
touch-action: none;

@media (hover: hover) {
    opacity: 0;
}

&.resizer.isResizing{
    background: blue;
    opacity: 1;
}
&:hover {
    opacity: 1;
  }
`

export const Str = styled.tr`
&:hover {
    background-color: rgba(81, 243, 240, 0.5);
}
`

export const Std = styled.td`
border-bottom: 2px solid rgba(0, 0, 0, 0.3);
padding: 5px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`
