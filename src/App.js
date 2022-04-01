import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
