import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Birthplace from './Birthplace';
import Leaders from './Leaders';
import Stable from './Stable';
import Training from './Training';

const App = () =>
  <div id="main">
    <CssBaseline />
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          MasterGlaive
        </Typography>
        <NavLink className="nav-link" activeClassName="active" to="/">
          <Button color="inherit">
            Birthplace status
          </Button>
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/leaders">
          <Button color="inherit">
            City leaders
          </Button>
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/stable">
          <Button color="inherit">
            Stable
          </Button>
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/training">
          <Button color="inherit">
            Training
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>

    <Route exact path="/" component={Birthplace}/>
    <Route path="/leaders" component={Leaders}/>
    <Route path="/stable" component={Stable}/>
    <Route path="/training" component={Training}/>
  </div>;

export default App;
