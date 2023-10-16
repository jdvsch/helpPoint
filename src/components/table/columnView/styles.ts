import styled from 'styled-components'

export const Main = styled.div`
padding-top: 15px;
padding-bottom: 15px;
`

export const SlabelAll = styled.label`
padding: 5px;
margin-bottom:30px;
cursor: pointer;
display:block;
text-align: center;
user-select: none;

&:hover{
    background-color: green;
}

&.disabled{
    color: gray;
    cursor: not-allowed;
}

&.disabled:hover{
    background-color: black;
}
`

export const Sinput = styled.input`
margin-right: 10px;

&.disabled{
    display:none;
}
`

export const SlabelOptions = styled.label`
margin-top: 10px;
padding: 5px;
cursor: pointer;
display:block;
user-select: none;
&:hover{
    background-color: greenyellow;
}
`
