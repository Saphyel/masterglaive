import React from 'react';

const TableBody = (props) =>
  <tbody id={props.name}>
    {props.list.map(opt => {
      return (
        <tr key={opt.chocobo.hp}>
          <td>{opt.chocobo.hp}</td>
          <td>{opt.chocobo.attack}</td>
          <td>{opt.chocobo.speed}</td>
          <td>{opt.chocobo.colour}</td>
          <td>{opt.chocobo.attack}</td>
          <td><a href={opt.id}>Delete</a></td>
        </tr>
      );
    })}
  </tbody>;

export default TableBody;
