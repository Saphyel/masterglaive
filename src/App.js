import React from 'react';
import ChocoboNew from './components/ChocoboNew';
import ChocoboList from './components/ChocoboList';
import ContentTable from './components/ContentTable';

const App = () =>
  <div id="main" className="container-fluid text-center">
    <h1>ChocoGlaive</h1>
    <p>Get the score of the chocobos of your stable.
    So you will release your weakest chocobo.</p>
    <ContentTable
      description="Max level"
      head={[99,80,50,30,20]}
      body={[
        "This bird roosts at the top of the pecking order!",
        "This bird's plumage exudes an air of prestige",
        "This bird's feathers have a certain sheen about them",
        "This bird is middle-of-the-flock in all regards",
        "This bird does not stand out from the flock"
      ]} />
      <ContentTable
        description="Bonus for training attributes"
        head={["Any","stamina","fighter","speed","speed","nothing"]}
        body={[
          "It appears to possess incredible attributes",
          "Its sturdy musculature should make it more resillient",
          "It looks ready and raring for a good fight",
          "Its quick reflex should help it sprint to and fro",
          "Its powerful wings should allow it to stay aloft longer",
          "It seems to possess no notable attributes"
        ]} />
    <p>Rank A+ in speed requires above 69 mph.</p>
    <ChocoboList />
    <ChocoboNew />
  </div>;

export default App;
