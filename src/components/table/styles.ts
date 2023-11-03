import styled from 'styled-components'

export const MainDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.bg3};
`

export const TableDiv = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto;
    // scrollbar-width: thin;
    scrollbar-color: rgba(108,122,137,1) rgba(108,122,137,.5);
`
