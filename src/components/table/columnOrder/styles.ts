import styled from 'styled-components'

interface Props {
  Width?: string
}

export const Sth = styled.th<Props>`
    position: relative;
    text-align: start;
    padding: 5px 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    user-select: none;
    width: ${props => props.Width};

    &.select{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: end;
        height: 55px;
    }

    &:last-child {
        width: 300px;
    }
`

export const ColumnName = styled.div`
    display: flex;
    cursor: pointer;
    padding: 0 0 5px 0;

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
    &.rowSelected{
        background-color: rgba(1, 43, 240, 0.5);
    }

    &:hover {
        background-color: rgba(81, 243, 240, 0.5);
    }
`

export const Std = styled.td`
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    padding: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &.checkbox {
        text-align: center;
    }

    &.noCheckbox {
        cursor: pointer;
    }
`
