import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation
} from "react-router-dom";

import BirthplacesPage from './pages/BirthplacesPage';
import LeadersPage from './pages/LeadersPage';
import ChocobosPage from './pages/ChocobosPage';

const Menu: React.FC = () =>
  <header className="App-header">
    <h1>MasterGlaive</h1>
    <Router>
      <div id={'menu'}>
        <ul>
          <li><Link to="/">Birthplaces</Link></li>
          <li><Link to="/leaders">Leaders</Link></li>
          <li><Link to="/chocobos">Chocobos</Link></li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/"><BirthplacesPage/></Route>
          <Route path="/leaders"><LeadersPage/></Route>
          <Route path="/chocobos"><ChocobosPage/></Route>

          <Route path="*"><NoMatch/></Route>
        </Switch>
      </div>
    </Router>
  </header>;


function NoMatch() {
  const location = useLocation();

  return (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  );
}

export default Menu;
