import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const TableHeader = props =>
  <TableHead>
    <TableRow>
    {props.values.map(header => {
      return (
        <TableCell key={header}>{header}</TableCell>
      );
    })}
    </TableRow>
  </TableHead>;

TableHeader.propTypes = {
  values: PropTypes.array.isRequired
};

export default TableHeader;
