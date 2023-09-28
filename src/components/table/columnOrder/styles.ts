import styled from 'styled-components'

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

    & isResizing {
    background: blue;
    opacity: 1;
    }

    @media (hover: hover) {
    &.resizer {
        opacity: 0;
    }

    &*:hover > .resizer {
        opacity: 1;
    }
}
`
