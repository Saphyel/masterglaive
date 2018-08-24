import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import { del } from 'idb-keyval';

class TableContent extends React.Component {
  async deleteItem(id) {
    await del(id);
    window.location.reload();
  }

  calcSpeed(value) {
    if (value === 'C') {
      return 110;
    }
    else if (value === 'B') {
      return 120;
    }
    else if (value === 'A') {
      return 130;
    }
    else if (value === 'A+') {
      return 140;
    }
    return 100;
  }

  calculator(chocobo) {
    const hp = parseInt(chocobo.hp);
    const attack = parseInt(chocobo.attack);
    const speed = this.calcSpeed(chocobo.speed)
    return Math.round((hp / 20) + (attack / 10) + speed);
  }

  render() {
    return (
      <TableBody id={this.props.name}>
        {this.props.list.map(opt => {
          return (
            <TableRow key={opt.id}>
              <TableCell>{opt.chocobo.hp}</TableCell>
              <TableCell>{opt.chocobo.attack}</TableCell>
              <TableCell>{opt.chocobo.speed}</TableCell>
              <TableCell>{opt.chocobo.colour}</TableCell>
              <TableCell>{this.calculator(opt.chocobo)}</TableCell>
              <TableCell>
                <Button variant="contained" color="secondary" onClick={() => this.deleteItem(opt.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    );
  }
}

TableContent.propTypes = {
  list: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

export default TableContent;
