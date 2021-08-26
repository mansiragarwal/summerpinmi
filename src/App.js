import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import { Provider } from "react-redux";

import {ActiveStepProvider, PinsProvider, SessionProvider, UserModeProvider} from './context/index';
import Landing from './components/layout/Landing';
import Content from './components/layout/Content';
import { store } from "./components/Store";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

// import 'default-passive-events';
/* "default-passive-events": "^2.0.0", */

const theme = createMuiTheme({
  palette: {
    teal: {
      dark: '#005E7D',
      main: '#337E92',
      light: '#7C6D78',
      lighter: '#C2DCE7',
    },
    pink: {
      dark: '#FC6D78',
      main: '#7DA2A9',
      light: '#FECACE',
    },
    gray: {
      dark: '#30394B',
      main: '#4D4D4D',
      light: '#DDEEF9',
    },
    action: {
      hover: '#C2DCE7',
    }
  }
});

const App = () => {
	return (
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={store}>
          <SessionProvider>
            <ActiveStepProvider>
              <PinsProvider>
                <UserModeProvider>
                  <main>
                    <Switch>
                      <Route exact path='/' component={Landing}/>
                      <Route exact path="/content" component={Content}/>
                    </Switch>
                  </main>
                </UserModeProvider>
              </PinsProvider>
            </ActiveStepProvider>
          </SessionProvider>
        </Provider>
      </Router>
    </ThemeProvider>
	)
}

export default App;