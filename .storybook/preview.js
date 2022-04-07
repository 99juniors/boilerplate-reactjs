import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/globalStyles';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}