import React from 'react';
import ChocoboNew from './components/ChocoboNew';
import ChocoboList from './components/ChocoboList';

const App = () =>
  <div id="main" className="container-fluid">
    <h1>ChocoGlaive</h1>
    <p>Get the score of the chocobos of your stable.
    So you will release your weakest chocobo.</p>
    <ChocoboList />
    <ChocoboNew />
  </div>;

export default App;
