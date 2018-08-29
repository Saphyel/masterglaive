import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Title from './Title';

const ContentTable = (props) =>
  <Grid item xs>
    <Paper>
      <Title message={props.description} />
      <Table>
        <TableBody>
          {props.head.map((value, index) => {
            return (
              <TableRow key={value}>
                <TableCell component="th" scope="row">{value}</TableCell>
                <TableCell>{props.body[index]}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  </Grid>;

ContentTable.propTypes = {
  description: PropTypes.string.isRequired,
  head: PropTypes.array.isRequired,
  body: PropTypes.array.isRequired,
};

export default ContentTable;
