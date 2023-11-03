import styled, { keyframes } from 'styled-components'

interface Props {
  Color?: string
}

const animation = keyframes`
  0%, 75%, 100% {
      transform: scale(1.5);
      opacity: 0;
 }
  25%, 50% {
      transform: scale(1);
      opacity: 1;
 }
`

export const MainDiv = styled.div`
  position: absolute;
  background-color: rgba(255,255,255,1);
  height: 100%;
  width: 100%;
  z-index: 3;
  font-size: 84px;
  font-weight: 800;
  text-align: center;
  padding-top: 15%;

  & span {
    display: inline-block;
    position: relative;
  }

  span::after {
      position: absolute;
      top: 0;
      left: 0;
      content: attr(data-text);
      color: goldenrod;
      opacity: 0;
      transform: scale(1.5);
      animation: ${animation} 3s infinite;
  }
  & span:nth-child(2)::after {
    animation-delay: 0.1s;
  }
  & span:nth-child(3)::after {
    animation-delay: 0.2s;
  }
  & span:nth-child(4)::after {
    animation-delay: 0.3s;
  }
  & span:nth-child(5)::after {
    animation-delay: 0.4s;
  }
  & span:nth-child(6)::after {
    animation-delay: 0.5s;
  }
  & span:nth-child(7)::after {
    animation-delay: 0.6s;
  }
  & span:nth-child(8)::after {
    animation-delay: 0.7s;
  }
  & span:nth-child(9)::after {
    animation-delay: 0.8s;
  }
  & span:nth-child(10)::after {
    animation-delay: 0.9s;
  }
  & span:nth-child(11)::after {
    animation-delay: 1s;
  }
  & span:nth-child(12)::after {
    animation-delay: 1.1s;
  }
  & span:nth-child(13)::after {
    animation-delay: 1.2s;
  }
`

export const Span = styled.span<Props>`
color: ${props => ((props.Color ?? '').length > 0) ? props.Color : 'rgba(0, 0, 0, .2)'};
`

// import { css } from 'styled-components';
// import { fontWeight } from './vars';

// import myFontURL from '../../mypath/fonts/OurFont-Bold.woff2';

// export const fontFaces = css`
//   @font-face {
//     font-family: 'OurFont';
//     src: url(${myFontURL}) format('woff2');
//     font-weight: ${fontWeight.bold};
//     font-style: normal;
//   }
// `;
