import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';

import { Button } from './components';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <h1>99juniors | boilerplate</h1>
        <Button />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
