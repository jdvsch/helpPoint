import { createGlobalStyle } from 'styled-components'

interface ThemesValues {
  bg: string
  bgAlpha: string
  bg2: string
  bg3: string
  text: string
  primary: string
}

export const GloblaStyle = createGlobalStyle`
  *, *::before, *::after{

    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${({ theme }: { theme: ThemesValues }) => theme.bg2};
    color: ${({ theme }) => theme.text};
    letter-spacing: .6px;
  }
`
