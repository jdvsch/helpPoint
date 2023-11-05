import styled from 'styled-components'
import cmms from '../../images/cmms.png'

interface Props {
  openClose: string
}

export const MainDiv = styled.div`
    display:flex;
    padding: 10px;
    border-radius: 5px;
    /* background-image: url(${cmms});
    background-size: cover;
    background-repeat: no-repeat; */
`

export const Form = styled.form`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.bg3};
`

export const Img = styled.img`
    height: auto;
    width: auto;
    max-width: 170px;
    max-height: 170px;
    border-radius: 3px;
`

export const Input = styled.input`
    margin: 10px 0;
    width: 240px;
    height: 30px;
    border-radius: 5px;
    border: gray solid 1px;
    text-align: center;
    font-weight: 700;
`
export const Span = styled.span`
    color: white;
`

export const Button = styled.button`
    margin-top: 5px;
    width: 100px;
    height: 40px;
    background-color: ${({ theme }) => theme.bg2};
    border-radius: 20px;
    border: none;
    color: ${({ theme }) => theme.text5};
    font-weight: 700;
    cursor: pointer;

    &:hover{
        background-color: ${({ theme }) => theme.bg1};
    }
`

export const Div = styled.div`
    position: relative;
`

export const Icon = styled.div<Props>`
    position: absolute;
    top: 25%;
    bottom: 25%;
    right: 2%;
    font-size: 22px;

    svg{
        color: ${(Props) => Props.openClose === 'password' ? 'red' : 'green'};
        background-color: transparent;
    }
   
`
