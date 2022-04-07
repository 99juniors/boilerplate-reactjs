import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: local('Montserrat Light'), local('Montserrat-Light'), url('/fonts/Montserrat-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url('/fonts/Montserrat-Regular.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local('Montserrat Bold'), local('Montserrat-Bold'), url('/fonts/Montserrat-Bold.ttf') format('truetype');
  }
  
  ${normalize};

  html {
    font-size: 50%;
  }

  html,
  body {
    height: 100%;
  }
  body {
    background-color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.sizes.default};
  }
`;

export default GlobalStyles;
