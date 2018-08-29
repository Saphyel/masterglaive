import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Birthplaces from './pages/Birthplaces';
import Leaders from './pages/Leaders';
import Stable from './pages/Stable';
import Training from './pages/Training';
import Header from "./components/Header";

const App = () =>
  <div id="main">
    <CssBaseline />

    <Header/>

    <Route exact path="/masterglaive/" component={Birthplaces}/>
    <Route path="/masterglaive/leaders" component={Leaders}/>
    <Route path="/masterglaive/stable" component={Stable}/>
    <Route path="/masterglaive/training" component={Training}/>
  </div>;

export default App;
