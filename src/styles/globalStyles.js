import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

const GlobalStyles = createGlobalStyle`
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
  }
`;

export default GlobalStyles;
