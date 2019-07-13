import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Birthplaces from "./pages/Birthplaces";
import Leaders from "./pages/Leaders";
import Chocobos from "./pages/Chocobos";
import MenuLink from "./components/MenuLink";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

const Menu: React.FC = () =>
  <Router basename="/masterglaive">
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          MasterGlaive
        </Typography>
        <MenuLink link="/" message="Birthplace status" />
        <MenuLink link="/leaders" message="City leaders" />
        <MenuLink link="/chocobos" message="Chocobos" />
      </Toolbar>
    </AppBar>
    <Route exact path="/" component={Birthplaces}/>
    <Route path="/leaders" component={Leaders}/>
    <Route path="/chocobos" component={Chocobos}/>
  </Router>;

export default Menu;
