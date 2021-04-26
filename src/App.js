import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './routes/Home.js';
import UnderConstruction from './components/UnderConstruction';

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
      <Router>
        <Switch>
        <Route path="/old">
            <Home />
          </Route>
          <Route path="/">
            <UnderConstruction />
          </Route>
          
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
