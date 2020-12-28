import React from 'react';
import { Route, Router } from 'react-router-dom';
import AppContext from './AppContext';
import { createBrowserHistory } from "history";
import Projects from './main/project/list/Project';
import { jeju1Theme } from './config/themeConfig';
import { MuiThemeProvider } from '@material-ui/core';
import ConfigInit from './config/ConfigInit';

const history = createBrowserHistory();

const App = () => {
    const routes = {};
    return (<AppContext.Provider
        value={{
            routes
        }}
    >
        <MuiThemeProvider theme={jeju1Theme}>
            <ConfigInit />
            <Router history={history}>
                <Route exact path="/" component={Projects} />
            </Router>
        </MuiThemeProvider>
    </AppContext.Provider>);
}
export default App;