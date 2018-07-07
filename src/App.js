import React from 'react';
import ChocoboNew from './components/ChocoboNew';
import ChocoboList from './components/ChocoboList';

const App = () =>
  <div id="main" className="container-fluid">
    <h1>ChocoGlaive</h1>
    <ChocoboNew />
    <ChocoboList />
  </div>;

export default App;
