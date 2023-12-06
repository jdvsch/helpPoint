import styled from 'styled-components'

export const MainDiv = styled.div`
height: 100%;
width: 100%;
padding: 10px;
`

export const Header = styled.div`
display: flex;
flex-direction: row;
margin: 10px 0;
select{
    max-width: 40%;
}
`

export const HeaderInpunts = styled.div`
width: 100%;
margin-left: 50px;
`
export const Row = styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
column-gap: 20px;
`
