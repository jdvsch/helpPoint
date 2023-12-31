import { createGlobalStyle } from 'styled-components'

export const GloblaStyle = createGlobalStyle`
  *, *::before, *::after{
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    letter-spacing: .6px;
  }
`
