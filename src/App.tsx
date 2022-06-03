import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";

import axios from "axios";

import { useEffect } from 'react';
import Home from './views/Home';
import Protected from './components/Protected';
import Kiosk from './views/Kiosk';
import Commendations from './views/Commendations';
import Admin from './views/Admin';
import AdminProtected from './components/AdminProtected';
import EmployeeContext from './providers/EmployeeContext';
import Header from './components/themed/Header';
import WhatIf from './views/WhatIf';
import TeamContext from './providers/TeamContext';
import UserContext from './providers/UserContext';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#005288',
      },
      secondary: {
        main: '#fdb913',
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <UserContext>
        <EmployeeContext>
          <Router>
            <Switch>
              <TeamContext>
                <Route path="/" exact>
                  <Protected>
                    <Home />
                  </Protected>
                </Route>
                <Route path="/kiosk" exact>
                  <Protected>
                    <Kiosk />
                  </Protected>
                </Route>
                <Route path="/commendations" exact>
                  <Protected>
                    <Header />
                    <Commendations />
                  </Protected>
                </Route>
                <Route path="/admin" exact>
                  <AdminProtected>
                    <Header />
                    <Admin />
                  </AdminProtected>
                </Route>
              </TeamContext>
              <Route path="/whatif" exact>
                <Header />
                <WhatIf />
              </Route>
            </Switch>
          </Router>
        </EmployeeContext>
      </UserContext>
    </ThemeProvider>
  )
}

export default App
