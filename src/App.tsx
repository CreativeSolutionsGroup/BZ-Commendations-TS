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
      <EmployeeContext>
        <Router>
          <Switch>
            <TeamContext>
              <Route path="/" exact>
                <Protected>
                  <Home profileImage={profileImageUrl} getProfileImage={getProfileImage} getEmployeeProfileImage={getEmployeeProfileImage} isAdmin={isAdmin} />
                </Protected>
              </Route>
              <Route path="/kiosk" exact>
                <Protected>
                  <Kiosk profileImage={profileImageUrl} getProfileImage={getProfileImage} getEmployeeProfileImage={getEmployeeProfileImage} isAdmin={isAdmin} />
                </Protected>
              </Route>
              <Route path="/commendations" exact>
                <Protected>
                  <Header profileImage={profileImageUrl} isAdmin={isAdmin} />
                  <Commendations getEmployeeProfileImage={getEmployeeProfileImage} />
                </Protected>
              </Route>
            </TeamContext>
            <Route path="/whatif" exact>
              <Header />
              <WhatIf />
            </Route>
            <TeamContext>
              <Route path="/admin" exact>
                <AdminProtected>
                  <Header profileImage={profileImageUrl} isAdmin={isAdmin} />
                  <Admin getEmployeeProfileImage={getEmployeeProfileImage} />
                </AdminProtected>
              </Route>
            </TeamContext>
          </Switch>
        </Router>
      </EmployeeContext>
    </ThemeProvider>
  )
}

export default App
