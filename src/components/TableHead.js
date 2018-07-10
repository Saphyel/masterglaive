import React from 'react';

const TableHead = (props) =>
  <thead className="thead-dark">
    <tr>
      {props.options.map(opt => {
        return (<th scope="col" key={opt}>{opt}</th>);
      })}
    </tr>
  </thead>;

export default TableHead;
