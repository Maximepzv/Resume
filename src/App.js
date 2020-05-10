import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Experience from './components/Experience';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ReactComponent as Wave } from './assets/images/wave.svg';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: '#FFB633',
      secondary: '#282C34',
      contrastText: '#fff',
    },
    secondary: {
      main: '#282C34',
    },
    spacing: 4,
  },
  typography: {
    fontFamily: `Jost, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;`
  }
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Wave style={{ marginBottom: '-3%' }} />
      <About />
      <Experience />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
