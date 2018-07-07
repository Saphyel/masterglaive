import React from 'react';

const ChocoboList = () =>
  <div className="table-responsive">
    <table id="chocolist" className="table table-striped table-sm">
      <thead className="thead-dark">
        <tr>
          <th scope="col">HP</th>
          <th scope="col">Attack</th>
          <th scope="col">Speed</th>
          <th scope="col">Rate</th>
        </tr>
      </thead>
      <tbody id="choco-content">
      </tbody>
    </table>
  </div>;

export default ChocoboList;
