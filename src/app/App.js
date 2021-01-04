import React from 'react';
import { Route, Router } from 'react-router-dom';
import AppContext from './AppContext';
import { createBrowserHistory } from "history";
import Projects from './main/project/list/Project';
import { jeju1Theme } from './config/themeConfig';
import { MuiThemeProvider } from '@material-ui/core';
import ConfigInit from './config/_configuration';
import Layout1 from './layouts/layout1/Layout1';
import { SnackbarProvider } from 'notistack';

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
                <SnackbarProvider maxSnack={3}>
                    <Layout1>
                        <Route exact path="/app/project/list" component={Projects} />

                    </Layout1>
                </SnackbarProvider>
            </Router>
        </MuiThemeProvider>
    </AppContext.Provider>);
}
export default App;