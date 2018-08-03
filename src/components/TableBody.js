import React from 'react';
import Button from './form/Button';
import { del } from 'idb-keyval';

class TableBody extends React.Component {
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
    return (hp / 20) + (attack / 10) + speed;
  }

  render() {
    return (
      <tbody id={this.props.name}>
        {this.props.list.map(opt => {
          return (
            <tr key={opt.id}>
              <td>{opt.chocobo.hp}</td>
              <td>{opt.chocobo.attack}</td>
              <td>{opt.chocobo.speed}</td>
              <td>{opt.chocobo.colour}</td>
              <td>{this.calculator(opt.chocobo)}</td>
              <td>
                <Button
                  pk={() => this.deleteItem(opt.id)}
                  colour="btn btn-danger"
                  />
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
