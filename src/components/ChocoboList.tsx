import React from "react";

// interface Chocobo {
//   id: string
//   hp: number
//   attack: number
//   speed: string
//   colour: string
// }


const ChocoboList: React.FC = () => {
  const stable = [{id:'l1',hp: 3,attack:4,speed:'a',colour:'f'},{id:'l2',hp: 5,attack:2,speed:'b',colour:'g'},{id:'l3',hp: 1,attack:6,speed:'a',colour:'h'}];

  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>HP</th>
          <th>Attack</th>
          <th>Speed</th>
          <th>Colour</th>
          <th>Points</th>
          <th>Options</th>
        </tr>
        </thead>
        <tbody>
        {stable.map(chocobo =>
          <tr key={chocobo.id}>
            <td>{chocobo.hp}</td>
            <td>{chocobo.attack}</td>
            <td>{chocobo.speed}</td>
            <td>{chocobo.colour}</td>
            <td>{chocobo.hp + chocobo.attack}</td>
            <td>
              <button data-remove-id={chocobo.id}>x</button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
      {stable.length ? null : (<p>Your stable is empty!</p>)}
    </div>
  );
};


export default ChocoboList;
