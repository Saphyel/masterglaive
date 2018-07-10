import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const ChocoboList = () =>
  <div className="table-responsive">
    <table id="chocolist" className="table table-striped table-sm">
      <TableHead
        options={['HP','Attack','Speed','Colour', 'Value']}/>
      <TableBody
        name="choco-content"/>
    </table>
  </div>;

export default ChocoboList;
